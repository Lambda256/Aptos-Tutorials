# Aptos Coin Transfer Tutorial

## How to transfer your APT Coin?

There are 5 steps to execute your Transaction in Aptos.

1. **Transaction Build**

   - Create a Raw Transaction by entering the required data.

2. **Transaction Simulation (Optional)**

   - Simulate the transaction to check the gas fee consumption.

3. **Transaction Signing**

   - Sign the transaction using the Sender Account.

4. **Transaction Submission**

   - Submit the transaction to the Aptos network.

5. **Transaction Result Verification**

   - Wait for the transaction to be processed by the network and then verify the result.

You can learn more details about this tutorial by clicking the link below.

- [Go to Nodit Aptos APT Transfer tutorials docs](https://developer.nodit.io/docs/sending-apt-coin)

<br>
<br>

### Transaction Build

- Input the Aptos Coin Transfer data and build a raw transaction.
- Execute the following command in your terminal:
  ```
  $ ts-node 1.transactionBuilding.ts
  ```
  <br>

### Transaction Simulation (Optional)

- To check the result of the transaction, you can simulate the transaction.
- Execute the following command in your terminal:
  ```
  $ ts-node 2.transactionSimulation.ts
  ```
  <br>

### Transaction Signing

- The transaction is signed for submission to Aptos.
- Execute the following command in your terminal:
  ```
  $ ts-node 3.transactionSigning.ts
  ```
  <br>

### Transaction Submission

- Submit the transaction to Aptos.
- Execute the following command in your terminal:
  ```
  $ ts-node 4.transactionSubmission.ts
  ```
  <br>

### Transaction Result Verification

- Check the result of the transaction committed by the validator.
- Execute the following command in your terminal:
  ```
  $ ts-node 5.transactionResult.ts
  ```
  <br>

### Using other Methods

- You can also transfer your APT Coin to use other methods such as transferCoinTransaction, signAndSubmitTransactions.
- Execute the following command in your terminal:
  ```
  $ ts-node 6.otherMethod.ts
  ```
