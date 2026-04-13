import { showToast } from "../ui/toast.js";
import { getCurrentUser } from "../services/authService.js";
import { getAllMovies } from "../repositories/movieRepository.js";
import { $ } from "../utils/dom.js";
import { handleLogout } from "../controllers/logoutController.js";
import { routes } from "../config/constants.js";

const btnHeader = $(".btn-header");
const movieGrid = $(".movies-grid");
const toastData = sessionStorage.getItem("toast");

if (toastData) {
  const { type, title, message } = JSON.parse(toastData);
  showToast(type, title, message);
  sessionStorage.removeItem("toast");
}

const currentUser = getCurrentUser();
const movies = getAllMovies();

if (currentUser) {
  btnHeader.textContent = "Đăng xuất";
  btnHeader.onclick = handleLogout;
} else {
  btnHeader.textContent = "Đăng nhập / Đăng ký";
  btnHeader.onclick = () => {
    window.location.href = routes.login;
  };
}

const createMovieTemplate = (movie) => {
  return `
    <div class="movie-card">
      <div class="movie-poster">
        <img
          src="${movie.posterUrl}"
          alt="${movie.title}"
        />
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span><i class="fa-regular fa-clock"></i> ${movie.duration} phút</span>
          <span class="movie-dot">&bull;</span>
          <span class="movie-genre">${movie.genres}</span>
        </div>
        <button class="btn btn-book">Mua Vé</button>
      </div>
    </div>
  `;
};

const moviesToShow = movies.slice(0, 4);
const renderCardMovie = () => {
  if (!movieGrid) return;

  if (!movies || movies.length === 0) {
    movieGrid.innerHTML = `<p class="no-data">Hiện không có phim nào khả dụng</p>`;
    return;
  }

  const htmlContent = moviesToShow.map(createMovieTemplate).join("");

  movieGrid.innerHTML = htmlContent;
};

renderCardMovie();
