import {
  Account,
  Aptos,
  AptosConfig,
  Ed25519PrivateKey,
} from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY; // 0x12345...
const MESSAGE_MODULE_OWNER_ADDRESS = process.env.MESSAGE_MODULE_OWNER_ADDRESS;
if (!PRIVATE_KEY || !API_KEY || !MESSAGE_MODULE_OWNER_ADDRESS)
  throw new Error("Check your .env file");

const config = new AptosConfig({
  fullnode: `https://aptos-testnet.nodit.io/${API_KEY}/v1`,
  indexer: `https://aptos-testnet.nodit.io/${API_KEY}/v1/graphql`,
});

const aptos = new Aptos(config);
const ed25519Scheme = new Ed25519PrivateKey(PRIVATE_KEY);
const ownerAccount = Account.fromPrivateKey({
  privateKey: ed25519Scheme,
});
const message = "Input_your_Message";

(async () => {
  try {
    const transaction = await aptos.transaction.build.simple({
      sender: MESSAGE_MODULE_OWNER_ADDRESS,
      data: {
        function:
          // You should change the module_owner_address to your Message module owner address.
          // check the .env
          `${MESSAGE_MODULE_OWNER_ADDRESS}::message::set_message_with_message_counter`, //0x1::aptos_account::transfer
        functionArguments: [message],
      },
    });

    const ownerAuthenticator = aptos.transaction.sign({
      signer: ownerAccount,
      transaction,
    });

    const submitTx = await aptos.transaction.submit.simple({
      transaction,
      senderAuthenticator: ownerAuthenticator,
    });

    const executedTransaction = await aptos.waitForTransaction({
      transactionHash: submitTx.hash,
    });

    console.log(executedTransaction);
  } catch (error) {
    console.error(error);
  }
})();
