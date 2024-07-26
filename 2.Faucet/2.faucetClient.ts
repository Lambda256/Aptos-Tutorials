import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import {
  AptosFaucetClient,
  FundRequest,
} from "@aptos-labs/aptos-faucet-client";

const config = new AptosConfig({
  fullnode: "your_Nodit_Aptos_testnet_node_endpoint",
  indexer: "your_Nodit_Aptos_testnet_indexer_endpoint",
});

const aptos = new Aptos(config);
const faucetClient = new AptosFaucetClient({
  BASE: "https://faucet.testnet.aptoslabs.com",
});
const address = "input_your_account_address";

(async (address: string) => {
  try {
    const request: FundRequest = {
      amount: 100_000_000,
      address,
    };
    const [getFaucet] = (await faucetClient.fund.fund({ requestBody: request }))
      .txn_hashes;

    await aptos.waitForTransaction({
      transactionHash: getFaucet,
    });

    const getBalance = await aptos.getAccountAPTAmount({
      accountAddress: address,
    });
    console.log("My APT Balance :", getBalance);
  } catch (error) {
    console.error(error);
  }
})(address);
