"use strict";
{
  
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
    add() {
      let newContact = new Contact(name.value, email.value, number.value, text.value);
      this.contacts.push(newContact);  
    }
    display() {
    
    //Section to append to
    let contact_section = document.getElementById("contact_section");

    //Creating HTML elements to add
    let div = document.createElement("div");
    let info = document.createElement("p");
    let icon = document.createElement("i");

    //Adding CSS classes to created elements
    div.classList.add("contact_container");
    icon.classList.add("material-icons");
    icon.classList.add("delete");

    //Adding text
    icon.innerText = "delete";
    info.innerText = `Name: ${name.value}
Email: ${email.value}
Phone: ${number.value}
Relation: ${text.value}`;

    //Appending info to div, and div to contact section
    div.appendChild(info);
    div.appendChild(icon);
    contact_section.appendChild(div);


    //Waiting for icon click to remove div
    icon.addEventListener("click", ( ) => {
      div.remove();
    })
  }
    deleteAt() {
      
    }

  }

  class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
  
  }

  //New Address Book
  let newAddressBook = new AddressBook;

  //Form Info and Add/Enter
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let number = document.querySelector("#number");
  let text = document.querySelector("#relation");
  let button = document.querySelector("#button");
  let form = document.querySelector("#contact_form");
  let icon = document.querySelectorAll(".delete");
  
  //Add button Click/Reset form
  button.addEventListener("click", () => {
    newAddressBook.add();
    newAddressBook.display();
    name.value = "";
    email.value = "";
    number.value = "";
    text.value = "";
  })

  //Pressing enter will also submit form
  form.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      newAddressBook.add();
      newAddressBook.display();
      name.value = "";
      email.value = "";
      number.value = "";
      text.value = "";
    }
  })

  for (let i = 0; i < icon.length; i++) {
    
  }

  
  
  newAddressBook.display();
}