# Aptos Module upgrade Tutorial

## How to upgrade Module?

You can interact with Module using Transaction.

You can learn more details about this tutorial by clicking the link below.

- [Go to Nodit Aptos Upgrading the Module tutorials docs](https://developer.nodit.io/docs/upgrading-the-module)

<br>
<br>

## Logic error in Message Module

We already deployed a Message Module. But there is a logic error in set_message function.
Under normal logic, the message_counter should increase every time the message is changed. However, in the current logic, the message_counter does not change even when the message is upgraded.

So, we are going to upgrade our module and redeploy it.

<br>
<br>

## Modify your module

The only change in this code is the addition of a new set_message_with_message_counter function that modifies the message_counter logic below and marking the existing set_message function with #[deprecated] and modify test code.

```
module ownerAddress::message {
  use std::signer;
  use std::string::{Self,utf8, String};
  use std::error;

  struct Message has key {
    message_counter : u64,
    message : String,
  }

  const ENO_MESSAGE: u64 = 0;

  public fun get_message(message_owner : address) : string::String acquires Message {
    assert!(exists<Message>(message_owner), error::not_found(ENO_MESSAGE));
    borrow_global<Message>(message_owner).message
  }

  #[deprecated]
  public entry fun set_message(admin: &signer, message : String) acquires Message{
    let message_owner_address = signer::address_of(admin);
    if (exists<Message>(message_owner_address)) {
      let old_message = borrow_global_mut<Message>(message_owner_address);
      old_message.message = message;
    } else {
      move_to(admin, Message{
        message_counter : 1,
        message : message
      });
    }
  }
  public entry fun set_message_with_message_counter(admin: &signer, message : String) acquires Message{
    let message_owner_address = signer::address_of(admin);
    if (exists<Message>(message_owner_address)) {
      let stored_message = borrow_global_mut<Message>(message_owner_address);
      stored_message.message_counter = stored_message.message_counter+1;
      stored_message.message = message;

    } else {
      move_to(admin, Message{
        message_counter : 1,
        message : message
      });
    }
  }


#[test(account = @ownerAddress)]
  public entry fun test_message(account: &signer) acquires Message {
    let message = utf8(b"Hello, World!");
    set_message_with_id(account, message);
    let message_owner_address = signer::address_of(account);
    let stored_message = get_message(message_owner_address);
    assert!(message == stored_message, 0);
  }
}
```

<br>
<br>

## Set up your profile

- To set up the owner account, you configure the profile.
- Execute the following command in your terminal:

```
$ aptos init --network testnet
```

After that, input the private key of the owner account for the message module.
**You must use the Private Key of the account that deployed the Message Module for initialization, as the same account is required to interact with the Message Module.**

```
Enter your private key as a hex literal (0x...) [Current: None | No input: Generate new key (or keep one if present)]
```

Then you can set it as the owner account in your profile.

<br>

## Compile and Publish new Message Module.

The important thing is that nothing changes, including the Move.toml file, except for the additional function. If you delete any code, the publish will be failed.

- Execute the following command in your terminal:

```
$ aptos move compile
```

```
$ aptos move publish
```

<br>

## Checking The Module and change your message

- Checking The Module

```
curl --request GET \
     --url https://aptos-testnet.nodit.io/v1/accounts/<account_address>/module/<module_name> \
     --header 'X-API-KEY: <Your X-API-KEY>' \
     --header 'accept: application/json'
```

- Change your message
  Modify `./function/set_message.ts` and run this file.

```
 $ ts-node ./function/set_message.ts
```
