import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const API_KEY = process.env.API_KEY;

const config = new AptosConfig({
  network: Network.TESTNET,
  fullnode: `https://aptos-testnet.nodit.io/${API_KEY}/v1`,
  indexer: `https://aptos-testnet.nodit.io/${API_KEY}/v1/graphql`,
});

const aptos = new Aptos(config);
const address = "input_your_account_address";

(async () => {
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
})();
