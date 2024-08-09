import { useState } from "react";

const EditContact = ({ id }) => {
  const [newContact, setNewContact] = useState({ nama: "", noHp: 0 });
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  function handleEdit() {
    let recentContacs = contacts;
    let findContact = recentContacs.find((contact) => contact.id == id);

    findContact.nama = newContact.nama;
    findContact.noHp = newContact.noHp;

    localStorage.setItem("contacts", JSON.stringify(recentContacs));

    window.location.reload();
  }

  function handleChange(e) {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit Kontak</h3>
          <input
            name="nama"
            type="text"
            placeholder="Nama"
            value={contacts.nama}
            onChange={(e) => handleChange(e)}
          />
          <input
            name="noHp"
            type="text"
            placeholder="Nomor Hp"
            value={contacts.noHp}
            onChange={(e) => handleChange(e)}
          />
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => handleEdit()}>Edit</button>
            </form>
          </div>
          <p className="text-zinc-500">*Tidak pakai Type safe form*</p>
        </div>
      </dialog>
    </div>
  );
};

export default EditContact;
