// import React from "react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// eslint-disable-next-line react/prop-types
function MovieCard({ movie }) {
  // eslint-disable-next-line react/prop-types
  const { title, poster_path, vote_average, overview } = movie;

  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={IMAGE_URL + poster_path}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold truncate">{title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-xl mr-2">{vote_average}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current text-yellow-400"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p className="text-gray-700 mt-2 truncate-3-lines">{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
