import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import {
  AptosFaucetClient,
  FundRequest,
} from "@aptos-labs/aptos-faucet-client";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const API_KEY = process.env.API_KEY;

const config = new AptosConfig({
  network: Network.TESTNET,
  fullnode: `https://aptos-testnet.nodit.io/${API_KEY}/v1`,
  indexer: `https://aptos-testnet.nodit.io/${API_KEY}/v1/graphql`,
});

const aptos = new Aptos(config);
const faucetClient = new AptosFaucetClient({
  BASE: "https://faucet.testnet.aptoslabs.com",
});
const address = "input_your_account_address";

(async () => {
  try {
    const request: FundRequest = {
      amount: 100_000_000,
      address: address,
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
})();
