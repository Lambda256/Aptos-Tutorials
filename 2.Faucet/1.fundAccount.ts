import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";

const config = new AptosConfig({
  fullnode: "your_Nodit_Aptos_testnet_node_endpoint",
  indexer: "your_Nodit_Aptos_testnet_indexer_endpoint",
  faucet: "https://faucet.testnet.aptoslabs.com",
});

const aptos = new Aptos(config);
const address = "input_your_account_address";

(async (address: string) => {
  try {
    const getFaucet = await aptos.fundAccount({
      accountAddress: address,
      amount: 100_000_000,
    });
    console.log(getFaucet);

    const getBalance = await aptos.getAccountAPTAmount({
      accountAddress: address,
    });
    console.log("My APT Balance :", getBalance);
  } catch (error) {
    console.error(error);
  }
})(address);
