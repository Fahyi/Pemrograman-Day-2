const ItemCatatan = ({ catatan, editCatatan, hapusCatatan }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md mb-2">
      <p>{catatan.teks}</p>
      <div className="mt-2 flex gap-x-3 justify-center">
        <button
          onClick={() => editCatatan(catatan)}
          className="btn btn-warning"
        >
          Edit
        </button>
        <button
          onClick={() => hapusCatatan(catatan.id)}
          className="btn btn-error"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default ItemCatatan;
