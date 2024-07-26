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
const senderAccount = Account.fromPrivateKey({
  privateKey: ed25519Scheme,
});

const receiverAddress = Account.generate().accountAddress.toString();
const amount: number = 100000; // change amount to transfer

(async (senderAccount: Account, receiverAddress: string, amount: number) => {
  try {
    const senderAddress = senderAccount.accountAddress.toString();
    const transaction = await aptos.transaction.build.simple({
      sender: senderAccount.accountAddress.toString(),
      data: {
        function: "module_owner_address::fungible_asset::burn", //0x1::aptos_account::transfer
        functionArguments: [
          senderAddress,
          amount, // burn function requires to_address and amount as arguments
        ],
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
})(senderAccount, receiverAddress, amount);
