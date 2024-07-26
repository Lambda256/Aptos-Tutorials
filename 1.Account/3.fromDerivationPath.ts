import { Account } from "@aptos-labs/ts-sdk";

const mnemonic = "<input your mnemonic(12 words)>";
const exampleMnemonic =
  "kiwi boss buffalo course mystery myself pulse toast nothing nation pupil menu";

const path = "m/44'/637'/0'/0'/0'";

const account = Account.fromDerivationPath({
  path,
  mnemonic: exampleMnemonic,
});

console.log("your account :", account);
console.log("your privateKey :", account.privateKey.toString());
console.log("your publicKey :", account.publicKey.toString());
console.log("your address :", account.accountAddress.toString());
