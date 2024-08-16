# Nodit Aptos Tutorials

Hello world! Welcome to the Nodit Aptos Tutorials!
<br>
Nodit Aptos Tutorials are structured as follows:

1. Creating an Account
2. Receiving Faucet
3. Sending APT Coin
4. Deploying a Module
5. Interacting with the Module
6. Upgrading the Module
7. Issuing a Fungible Asset

By going through these steps, you will understand and conveniently use the Aptos blockchain. Learn Aptos with Nodit and create your Aptos Dapp using the Aptos Node and Indexer provided by Nodit!

<br>

## Set up for Tutorials

The Nodit Aptos tutorial uses various libraries, including the Aptos TypeScript SDK, Aptos Faucet Client, and Aptos CLI. The required environment setup for this tutorial is as follows.

### Sign up for Nodit and Connect to Aptos Node

You can sign up for Nodit by clicking the link below. You can create a new account or sign up for Nodit using an existing Google account.

- [Sign up for Nodit](https://id.lambda256.io/signup)
  <br>

### Set up Execution Environment

To ensure a smooth tutorial experience, you need to install the following programs.

**Install Node.js**

Node.js is a runtime environment that allows you to run JavaScript code, which is necessary for executing TypeScript code.

- [Download Node.js](https://nodejs.org/en/download/package-manager/current)

You can verify the installation of Node.js by entering the following command in the terminal:

```
$ node -v
```

```
v20.11.0
```

<br>
<br>

**Install Packages**

Once Node.js is installed, you need to install the packages required to run TypeScript. You can proceed with the installation using Node.js by entering the following commands in the terminal:

```
$ npm init
```

```
$ npm install ts-node typescript
```

```
$ tsc --init
```

<br>
<br>

**Install Aptos TypeScript SDK**

Install the TypeScript SDK provided by the Aptos Foundation using Node.js. The TypeScript SDK allows you to conveniently use Aptos, such as creating an Aptos account and executing transactions. You can install it by entering the following command in the terminal:

```
$ npm install @aptos-labs/ts-sdk
```

<br>
<br>

**Install Aptos Faucet Client**

Install the Aptos Faucet Client provided by the Aptos Foundation using Node.js. This allows users to receive faucet tokens in Aptos Testnet and Devnet environments. You can install it by entering the following command in the terminal:

```
$ npm install @aptos-labs/aptos-faucet-client
```

<br>
<br>

**Install Aptos CLI**

Aptos provides various methods for installing the CLI tailored to different operating environments. Click the link below to install the Aptos CLI for your operating system.

- [Learn how to install Aptos CLI](https://aptos.dev/en/build/cli)

Once the installation is complete, you can verify it by entering the following command in the terminal to view the help documentation.

```
$ aptos --help
```

```
Command Line Interface (CLI) for developing and interacting with the Aptos blockchain

Usage: aptos <COMMAND>

Commands:
  account     Tool for interacting with accounts
  config      Tool for interacting with configuration of the Aptos CLI tool
  genesis     Tool for setting up an Aptos chain Genesis transaction
  governance  Tool for on-chain governance
  info        Show build information about the CLI
  init        Tool to initialize current directory for the aptos tool
  key         Tool for generating, inspecting, and interacting with keys
  move        Tool for Move related operations
  multisig    Tool for interacting with multisig accounts
  node        Tool for operations related to nodes
  stake       Tool for manipulating stake and stake pools
  update      Update the CLI or other tools it depends on
  help        Print this message or the help of the given subcommand(s)
```

**Set up your .env**
To simplify the tutorial execution, several variables have been declared in the .env file located in the root directory. Assign appropriate values to each field and proceed with the tutorial easily.
