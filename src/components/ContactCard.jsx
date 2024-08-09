import EditContact from "./EditContact";

export default function ContactCard({ nama, noHp, id, deleteContact }) {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg flex items-center justify-between">
      <div class="px-6 py-4">
        <p>Nama: {nama}</p>
        <p>Nomor Hp: {noHp}</p>
      </div>

      <div className="flex gap-x-3">
        <EditContact id={id} />
        <button className="btn btn-error" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
