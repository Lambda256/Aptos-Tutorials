import { Account, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";

const privateKey = "input_your_private_key"; // 0x12345...
const ed25519Scheme = new Ed25519PrivateKey(privateKey);
const account = Account.fromPrivateKey({ privateKey: ed25519Scheme });

console.log("your account :", account);
console.log("your privateKey :", account.privateKey.toString());
console.log("your publicKey :", account.publicKey.toString());
console.log("your address :", account.accountAddress.toString());
