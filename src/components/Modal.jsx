import { useState } from "react";

const Modal = ({ addContact, newContact, setNewContact, setContacts }) => {
  function handleChange(i) {
    setNewContact({
      ...newContact,
      [i.target.name]: i.target.value,
    });
  }

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Tambah Kontak
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Kontak Baru</h3>
          <input
            name="nama"
            type="text"
            placeholder="nama"
            value={newContact.nama}
            onChange={(i) => handleChange(i)}
          />
          <input
            name="noHp"
            type="text"
            placeholder="no hp"
            value={newContact.noHp}
            onChange={(i) => handleChange(i)}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => addContact()}>Create</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
