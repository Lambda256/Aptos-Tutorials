# Aptos Fungible Asset Tutorial

## Let’s deploy your Fungible Asset module and mint your own coin!

Based on what you’ve learned so far, you can deploy the Fungible Asset Module and interact with the deployed module using transactions.

You can learn more details about this tutorial by clicking the link below.

- [Go to Nodit Aptos Fungible Asset tutorials docs](https://developer.nodit.io/docs/fungible-asset)

### Set up your profile

- To set up the owner account, you configure the profile.
- Execute the following command in your terminal:
  `$ aptos init --network testnet`

### Deploy Module

- Execute the following command in your terminal:
  `$ aptos move publish`

### function call

- Mint the fungible asset and store it in the sender’s account.
- Execute the following command in your terminal:
  `$ ts-node interaction/1.mint.ts`

- Transfer the Fungible Asset from sender to receiver.
- Execute the following command in your terminal:
  `$ ts-node interaction/2.transfer.ts`

- Burn the sender's Fungible Asset
- Execute the following command in your terminal:
  `$ ts-node interaction/3.burn.ts`

There is a Fungible Asset module in the [Aptos repository](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/move-examples/fungible_asset/fa_coin/sources/FACoin.move). You can take a look at the whole code about fungible assets.
