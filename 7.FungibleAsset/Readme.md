# Aptos Fungible Asset Tutorial

## Let’s deploy your Fungible Asset module and mint your own coin!

Based on what you’ve learned so far, you can deploy the Fungible Asset Module and interact with the deployed module using transactions.

You can learn more details about this tutorial by clicking the link below.

- [Go to Nodit Aptos Fungible Asset tutorials docs](https://developer.nodit.io/docs/fungible-asset)

<br>

## Set up your profile

- To set up the owner account, you configure the profile.
- Execute the following command in your terminal:

> **Note:**
>
> If you enter the Private Key of the Aptos account you used during initialization, you can retrieve and use that account. If you don’t have an existing account, you can proceed with initialization without entering a Private Key, and a new account will be created for you. In either case, entering the obtained Private Key into the .env file will allow you to conveniently follow the tutorial.

```
$ aptos init --network testnet
```

```
Enter your private key as a hex literal (0x...) [Current: None | No input: Generate new key (or keep one if present)]
```

- Input your owner address into the Move.toml file as shown below.

```
[package]
name = "message"
version = "1.0.0"
authors = []

[addresses]
  ownerAddress = "input_your_account_in_.aptos/config.yaml"
[dev-addresses]

[dependencies.AptosFramework]
git = "https://github.com/aptos-labs/aptos-core.git"
rev = "mainnet"
subdir = "aptos-move/framework/aptos-framework"

[dev-dependencies]

```

<br>

## Deploy Module

- Execute the following command in your terminal:

```
$ aptos move publish
```

<br>

## Function call

> **Note:**
>
> The logic requires that it must be executed with the same account as the Module’s owner account.

- Mint the fungible asset and store it in the sender’s account.
- Execute the following command in your terminal:

```
$ ts-node interaction/1.mint.ts
```

<br>

- Transfer the Fungible Asset from sender to receiver.
- Execute the following command in your terminal:

```
$ ts-node interaction/2.transfer.ts
```

<br>

- Burn the sender's Fungible Asset
- Execute the following command in your terminal:

```
$ ts-node interaction/3.burn.ts
```

<br>

There is a Fungible Asset module in the [Aptos repository](https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/move-examples/fungible_asset/fa_coin/sources/FACoin.move). You can take a look at the whole code about fungible assets.
