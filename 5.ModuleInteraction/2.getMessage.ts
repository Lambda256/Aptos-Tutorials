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

const ownerAddress = ownerAccount.accountAddress.toString();

(async (address: string) => {
  try {
    const result = await aptos.getAccountResource({
      accountAddress: address,
      resourceType: "module_owner_address::message::Message", //0x1::aptos_account::Account
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})(ownerAddress);
