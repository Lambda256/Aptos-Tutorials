module ownerAddress::message {
  use std::signer;
  use std::string::{Self, String};
  use std::error;

  struct Message has key {
    message_counter : u64,
    message : String,
  }

  const ENO_MESSAGE: u64 = 0;

  #[view]
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

