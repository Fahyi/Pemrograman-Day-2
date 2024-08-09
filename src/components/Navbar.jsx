export default function Navbar() {
  const NavPaths = [
    { path: "/tugas1", text: "Tugas 1" },
    { path: "/tugas2", text: "Tugas 2" },
    { path: "/tugas3", text: "Tugas 3" },
    { path: "/tugas4", text: "Tugas 4" },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavPaths.map((a) => (
            <li>
              <a href={a.path}>{a.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
