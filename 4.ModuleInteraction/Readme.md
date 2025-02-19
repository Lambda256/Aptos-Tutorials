# Aptos Module Interaction Tutorial

## How to interact with Module?

You can interact with Module using Transaction.

You can learn more details about this tutorial by clicking the link below.

- [Go to Nodit Aptos Interacting with the Module tutorials docs](https://developer.nodit.io/docs/interacting-with-the-module)

<br>

## setMessage

- set up your Message:
  > **Note:**
  >
  > You must use the same account that deployed the Message Module. Therefore, please set the Private Key of the account that deployed the Message Module in the .env file.

```
$ ts-node setMessage.ts
```

The message will change when you modify it and execute this file, but the message_counter will never change.
This logic error will modify in Tutorial 6.

<br>

## getMessage

- get the message is stored in your account:

```
$ ts-node getMessage.ts
```

It will find the resource your account is storing and return the message.
