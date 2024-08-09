import { useEffect, useState } from "react";
import DaftarCatatan from "../components/DaftarCatatan";
import FormCatatan from "../components/FormCatatan";

const Tugas3 = () => {
  const [catatan, setCatatan] = useState([]);
  const [catatanSaatIni, setCatatanSaatIni] = useState(null);

  useEffect(() => {
    const catatanDisimpan = JSON.parse(localStorage.getItem("catatan")) || [];
    setCatatan(catatanDisimpan);
  }, []);

  useEffect(() => {
    localStorage.setItem("catatan", JSON.stringify(catatan));
  }, [catatan]);

  const simpanCatatan = (teks) => {
    if (catatanSaatIni) {
      setCatatan(
        catatan.map((catatan) =>
          catatan.id === catatanSaatIni.id ? { ...catatan, teks } : catatan
        )
      );
      setCatatanSaatIni(null);
    } else {
      setCatatan([...catatan, { id: Date.now(), teks }]);
    }
  };

  const editCatatan = (catatan) => {
    setCatatanSaatIni(catatan);
  };

  const hapusCatatan = (id) => {
    setCatatan(catatan.filter((catatan) => catatan.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Aplikasi Catatan</h1>
      <FormCatatan
        simpanCatatan={simpanCatatan}
        catatanSaatIni={catatanSaatIni}
      />
      <DaftarCatatan
        catatan={catatan}
        editCatatan={editCatatan}
        hapusCatatan={hapusCatatan}
      />
    </div>
  );
};

export default Tugas3;
