import { useState, useEffect } from "react";

const FormCatatan = ({ simpanCatatan, catatanSaatIni }) => {
  const [teksCatatan, setTeksCatatan] = useState("");

  useEffect(() => {
    if (catatanSaatIni) {
      setTeksCatatan(catatanSaatIni.teks);
    }
  }, [catatanSaatIni]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teksCatatan == "") return alert("Catatan baru tidak boleh kosong");

    simpanCatatan(teksCatatan);
    setTeksCatatan("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={teksCatatan}
        onChange={(e) => setTeksCatatan(e.target.value)}
        placeholder="Masukkan catatan Anda di sini..."
        className="w-full h-32 p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="btn btn-info text-white">
        {catatanSaatIni ? "Perbarui Catatan" : "Tambahkan Catatan"}
      </button>
    </form>
  );
};

export default FormCatatan;
