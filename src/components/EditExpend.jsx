import { useState } from "react";

const EditExpend = ({ expend, editExpend, handleChange }) => {
  const [newExpend, setNewExpend] = useState({ nama: "", jumlah: 0 });

  function handleChange(e) {
    setNewExpend({ ...newExpend, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <button
        className="btn btn-warning btn-xs"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Edit
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Edit Pengeluaran</h3>
          <input
            name="nama"
            type="text"
            placeholder="Nama"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="jumlah"
            type="text"
            placeholder="Pengeluaran"
            onChange={(e) => handleChange(e)}
          />
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => editExpend(newExpend, expend)}>
                Edit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditExpend;
