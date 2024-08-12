import { Account, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY; // 0x12345...
if (!PRIVATE_KEY) throw new Error("Check your .env file");
const ed25519Scheme = new Ed25519PrivateKey(PRIVATE_KEY);
const account = Account.fromPrivateKey({ privateKey: ed25519Scheme });

console.log("your account :", account);
console.log("your privateKey :", account.privateKey.toString());
console.log("your publicKey :", account.publicKey.toString());
console.log("your address :", account.accountAddress.toString());
