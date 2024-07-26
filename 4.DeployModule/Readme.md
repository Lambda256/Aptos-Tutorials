# Aptos Module Tutorial

## How to deploy a module?

In this tutorial, you can learn about setting up the environment for deploying a module in Aptos and how to deploy a module.

You can learn more details about this tutorial by clicking the link below.

- [Go to Nodit Aptos Deploy Module Tutorials Docs](https://developer.nodit.io/docs/deploying-a-module)
  <br>
  <br>

## Process of Deploying a Module in This Tutorial

1. **Initialize your profile and modify the Move.toml**

- Initialize profile:

```
$ aptos init --network testnet
```

- Modify the Move.toml:

```
[package]
name = "message"
version = "1.0.0"
authors = []

[addresses]
  ownerAddress = "input_your_account_in_.aptos/config.yaml"

[dependencies.AptosFramework]
git = "https://github.com/aptos-labs/aptos-core.git"
rev = "mainnet"
subdir = "aptos-move/framework/aptos-framework"

[dev-dependencies]
```

<br>

2. **Compile message.move:**

```
$ aptos move compile
```

<br>

3. **Submit to Aptos:**

```
$ aptos move publish
```

<br>

4. **Check the deployed module:**

```
curl --request GET \
     --url https://aptos-testnet.nodit.io/v1/accounts/<account_address>/module/<module_name> \
     --header 'X-API-KEY: <Your X-API-KEY>' \
     --header 'accept: application/json'
```

In this directory, all directories and modules are set. But you can follow the guide if you want to deploy your own module or understand the process of deploying a module in Aptos.

<br>
<br>

## Set Up your own environment and deploy your module

1. **Generate your module directory:**

```
$ mkdir Message
```

<br>

2. **Initialize your profile and Move package**

- Initialize profile:

```
$ aptos init --network testnet
```

- Initialize Move environment:

```
$ aptos move init --name your_project_name
```

Then your directory is set up like below:

```
.
├── .aptos
      └── config.yaml
├── Move.toml
├── scripts
├── sources
└── tests
```

<br>

3. **Generate your move file:**

```
$ cd sources
```

```
$ touch message.move
```

<br>

4. **Write the message module**

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

#[test(account = @ownerAddress)]
  public entry fun test_message(account: &signer) acquires Message {
    let message = utf8(b"Hello, World!");
    set_message(account, message);
    let message_owner_address = signer::address_of(account);
    let stored_message = get_message(message_owner_address);
    assert!(message == stored_message, 0);
  }
}
```

There is a logic error in the set_message function. It will be modified in Tutorial 6.

<br>

5. **set up Move.toml:**

```
[package]
name = "message"
version = "1.0.0"
authors = []

[addresses]
  ownerAddress = "input_your_account_in_.aptos/config.yaml"

[dependencies.AptosFramework]
git = "https://github.com/aptos-labs/aptos-core.git"
rev = "mainnet"
subdir = "aptos-move/framework/aptos-framework"

[dev-dependencies]
```

<br>

6. **Compile message.move:**

```
$ aptos move compile
```

<br>

7. **Submit to Aptos:**

```
$ aptos move publish
```

<br>

8. **Check the deployed module:**

```
curl --request GET \
     --url https://aptos-testnet.nodit.io/v1/accounts/<account_address>/module/<module_name> \
     --header 'X-API-KEY: <Your X-API-KEY>' \
     --header 'accept: application/json'
```
