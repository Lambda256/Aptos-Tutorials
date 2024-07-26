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

(async (senderAccount: Account, receiverAddress: string, amount: number) => {
  try {
    const senderAddress = senderAccount.accountAddress.toString();
    const transaction = await aptos.transaction.build.simple({
      sender: senderAddress,
      data: {
        function: "0x1::aptos_account::transfer",
        functionArguments: [receiverAddress, amount],
      },
    });
    const [simulateTransactionResult] = await aptos.transaction.simulate.simple(
      {
        signerPublicKey: senderAccount.publicKey,
        transaction,
      }
    );

    console.log(simulateTransactionResult);
  } catch (error) {
    console.error(error);
  }
})(senderAccount, receiverAddress, 100_000_000);
