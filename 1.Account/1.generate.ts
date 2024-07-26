import { Account } from "@aptos-labs/ts-sdk";

const account = Account.generate();

console.log("your account :", account);
console.log("your privateKey :", account.privateKey.toString());
console.log("your publicKey :", account.publicKey.toString());
console.log("your address :", account.accountAddress.toString());
