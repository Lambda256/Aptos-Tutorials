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
const FUNGIBLE_TOKEN_MODULE_OWNER_ADDRESS =
  process.env.FUNGIBLE_TOKEN_MODULE_OWNER_ADDRESS;
if (!PRIVATE_KEY || !API_KEY || !FUNGIBLE_TOKEN_MODULE_OWNER_ADDRESS)
  throw new Error("Check your .env file");

const config = new AptosConfig({
  fullnode: `https://aptos-testnet.nodit.io/${API_KEY}/v1`,
  indexer: `https://aptos-testnet.nodit.io/${API_KEY}/v1/graphql`,
});

const aptos = new Aptos(config);
const ed25519Scheme = new Ed25519PrivateKey(PRIVATE_KEY);
const senderAccount = Account.fromPrivateKey({
  privateKey: ed25519Scheme,
});
const amount: number = 100_000_000_000; // change amount to mint

(async () => {
  try {
    const transaction = await aptos.transaction.build.simple({
      sender: FUNGIBLE_TOKEN_MODULE_OWNER_ADDRESS,
      data: {
        // You should change the module_owner_address to your module owner address.
        function: `${FUNGIBLE_TOKEN_MODULE_OWNER_ADDRESS}::fungible_asset::mint`, //0x1::aptos_account::transfer
        // mint function requires to_address and amount as arguments
        functionArguments: [FUNGIBLE_TOKEN_MODULE_OWNER_ADDRESS, amount],
      },
    });

    const senderAuthenticator = aptos.transaction.sign({
      signer: senderAccount,
      transaction,
    });

    const submitTx = await aptos.transaction.submit.simple({
      transaction,
      senderAuthenticator,
    });

    const executedTransaction = await aptos.waitForTransaction({
      transactionHash: submitTx.hash,
    });

    console.log(executedTransaction);
  } catch (error) {
    console.error(error);
  }
})();
