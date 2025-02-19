import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const API_KEY = process.env.API_KEY;
const MESSAGE_MODULE_OWNER_ADDRESS = process.env.MESSAGE_MODULE_OWNER_ADDRESS;
if (!API_KEY || !MESSAGE_MODULE_OWNER_ADDRESS)
  throw new Error("Check your .env file");

const config = new AptosConfig({
  fullnode: `https://aptos-testnet.nodit.io/${API_KEY}/v1`,
  indexer: `https://aptos-testnet.nodit.io/${API_KEY}/v1/graphql`,
});

const aptos = new Aptos(config);

(async () => {
  try {
    const result = await aptos.getAccountResource({
      accountAddress: MESSAGE_MODULE_OWNER_ADDRESS,
      // You should change the module_owner_address to your Message module owner address.
      // check the .env
      resourceType: `${MESSAGE_MODULE_OWNER_ADDRESS}::message::Message`, //0x1::aptos_account::Account
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
