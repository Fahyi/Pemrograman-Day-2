const ListFavorite = () => {
  const favoriteMovies = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <table>
      <tr>
        <th>No</th>
        <th>Film Favorit</th>
      </tr>

      {favoriteMovies?.map((favorite, i) => (
        <tr>
          <td>{i + 1}</td>
          <td>{favorite.title}</td>
        </tr>
      ))}
    </table>
  );
};

export default ListFavorite;
