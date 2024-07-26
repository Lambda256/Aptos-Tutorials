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

(async (senderAccount: Account, recipientAddress: string, amount: number) => {
  try {
    const senderAddress = senderAccount.accountAddress.toString();
    const transaction = await aptos.transferCoinTransaction({
      sender: senderAddress,
      recipient: recipientAddress,
      amount: amount,
    });

    const signAndSubmit = await aptos.signAndSubmitTransaction({
      signer: senderAccount,
      transaction,
    });

    const executedTransaction = await aptos.waitForTransaction({
      transactionHash: signAndSubmit.hash,
    });

    console.log(executedTransaction);
  } catch (error) {
    console.error(error);
  }
})(senderAccount, receiverAddress, 100_000_000);
