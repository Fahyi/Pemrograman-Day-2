import { useEffect, useState } from "react";
import EditExpend from "../components/EditExpend";

const Tugas2 = () => {
  const [newExpend, setNewExpend] = useState({
    nama: "",
    jumlah: 0,
  });

  const expends = JSON.parse(localStorage.getItem("expends"));

  function addExpend() {
    if (newExpend.nama == "") return alert("isi kolom yang tersedia");

    if (isNaN(newExpend.jumlah) || newExpend.jumlah <= 0) {
      return alert("Jumlah minimum pengeluaran lebih dari 0");
    }

    let expends = JSON.parse(localStorage.getItem("expends")) || [];

    const newExpends = { ...newExpend, id: expends.length + 1 };

    expends.push(newExpends);

    localStorage.setItem("expends", JSON.stringify(expends));

    setNewExpend({ nama: "", jumlah: "" });
  }

  function deleteExpend(item) {
    const expends = JSON.parse(localStorage.getItem("expends")) || [];
    const newExpends = expends.filter((expend) => expend.id !== item.id);

    console.log({ item: newExpends.id, itembaru: item.id });

    localStorage.setItem("expends", JSON.stringify(newExpends));

    window.location.reload();
  }

  function editExpend(newExpend, recentExpend) {
    if (
      newExpend.nama == "" ||
      newExpend.jumlah <= 0 ||
      newExpend.jumlah == null
    ) {
      return alert(
        "Pastikan nama pengeluaran dan jumlah pengeluaran terisi dengan benar"
      );
    }

    let recentExpends = expends;
    let findExpend = recentExpends.find(
      (expend) => expend.id == recentExpend.id
    );

    findExpend.nama = newExpend.nama;
    findExpend.jumlah = newExpend.jumlah;

    localStorage.setItem("expends", JSON.stringify(recentExpends));

    window.location.reload();
  }

  function handleChange(i) {
    setNewExpend({
      ...newExpend,
      [i.target.name]: i.target.value,
    });
  }

  function countTotal() {
    return expends.reduce((acc, val) => acc + Number(val.jumlah), 0);
  }

  useEffect(() => {
    countTotal();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <p className="text-zinc-500">*Type safe form*</p>

      <input
        name="nama"
        placeholder={`"Makan Siang"`}
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="jumlah"
        placeholder={`"15000"`}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => addExpend()}>Buat Pengeluaran</button>

      <table>
        {/* head */}
        <thead>
          <tr>
            <th>Nama Pengeluaran</th>
            <th>Jumlah Pengeluaran</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {expends &&
            expends.map((expend) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://i.pinimg.com/236x/08/ed/f7/08edf75294fd6eb21fc50f8e6b554f3b.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{expend.nama}</div>
                    </div>
                  </div>
                </td>
                <td>Rp{expend.jumlah}</td>
                <th className="flex gap-x-3">
                  <EditExpend
                    expend={expend}
                    editExpend={editExpend}
                    handleChange={handleChange}
                    setNewExpend={setNewExpend}
                  />
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => deleteExpend(expend)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Total Harga: Rp{countTotal()}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Tugas2;
