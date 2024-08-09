const MovieCard = ({ movie, addFavorite }) => {
  const { title, plot, poster } = movie;

  return (
    <div className="card bg-base-100 w-96 shadow-xl  ">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body flex-col gap-y-4 items-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm"> {plot}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => addFavorite(movie)}
          >
            Tambahkan Favorit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
