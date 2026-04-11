export const getAllMovies = () => {
  const movies = localStorage.getItem("movies");
  return movies ? JSON.parse(movies) : null;
};
