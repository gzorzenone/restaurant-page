let contacts = [
  {
    "name": "John Smith",
    "role": "Owner",
    "phoneNumber": "555-555-5555",
    "email": "john.smith@email.com"
  },
  {
    "name": "Mary Jane",
    "role": "Manager",
    "phoneNumber": "555-555-5556",
    "email": "mary.jane@email.com"
  }
]

function loadContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contacts.forEach((value) => {
    const person = document.createElement("div");
    person.classList.add("person");
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = value.name;
    person.appendChild(name);
    const role = document.createElement("p");
    role.classList.add("role");
    role.textContent = value.role;
    person.appendChild(role);
    const phoneNumber = document.createElement("p");
    phoneNumber.classList.add("phone-number");
    phoneNumber.textContent = value.phoneNumber;
    person.appendChild(phoneNumber);
    const email = document.createElement("p");
    email.classList.add("email");
    email.textContent = value.email;
    person.appendChild(email);
    contact.appendChild(person);
  });

  return contact;
}

export default loadContactPage;