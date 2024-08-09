import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";

const Tugas1 = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const [newContact, setNewContact] = useState({
    nama: "",
    noHp: "",
  });

  function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const newContacts = contacts.filter((a) => a.id !== index);

    localStorage.setItem("contacts", JSON.stringify(newContacts));

    window.location.reload();
  }

  function addContact() {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    const newestContact = { ...newContact, id: contacts.length + 1 };

    contacts.push(newestContact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    setNewContact({ nama: "", noHp: "" });
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Modal
        addContact={addContact}
        newContact={newContact}
        setNewContact={setNewContact}
      />

      <ul>
        {contacts.map((contact) => (
          <ContactCard
            id={contact.id}
            nama={contact.nama}
            noHp={contact.noHp}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tugas1;
