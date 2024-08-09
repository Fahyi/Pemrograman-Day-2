import ItemCatatan from "./ItemCatatan";

const DaftarCatatan = ({ catatan, editCatatan, hapusCatatan }) => {
  return (
    <div>
      {catatan.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada catatan</p>
      ) : (
        catatan.map((catatan) => (
          <ItemCatatan
            key={catatan.id}
            catatan={catatan}
            editCatatan={editCatatan}
            hapusCatatan={hapusCatatan}
          />
        ))
      )}
    </div>
  );
};

export default DaftarCatatan;
