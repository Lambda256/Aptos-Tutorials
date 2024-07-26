import {
  Account,
  Aptos,
  AptosConfig,
  Ed25519PrivateKey,
} from "@aptos-labs/ts-sdk";

const config = new AptosConfig({
  fullnode: "your_Nodit_Aptos_testnet_node_endpoint",
  indexer: "your_Nodit_Aptos_indexer_endpoint",
});

const aptos = new Aptos(config);

const privateKey = "your_private_key"; // 0x12345...
const ed25519Scheme = new Ed25519PrivateKey(privateKey);
const ownerAccount = Account.fromPrivateKey({
  privateKey: ed25519Scheme,
});

let message = "Input_your_Message";

(async (ownerAccount: Account, message: string) => {
  try {
    const transaction = await aptos.transaction.build.simple({
      sender: ownerAccount.accountAddress.toString(),
      data: {
        function:
          "module_owner_address::message::set_message_with_message_counter", //0x1::aptos_account::transfer
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
})(ownerAccount, message);
