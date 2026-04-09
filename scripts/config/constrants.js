const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);

const basePath = isLocal ? "" : "/CineManagement";

export const routes = {
  home: `${basePath}/index.html`,
  login: `${basePath}/pages/login.html`,
  register: `${basePath}/pages/register.html`,
  adminMovies: `${basePath}/pages/admin-movies.html`,
  adminTickets: `${basePath}/pages/admin-tickets.html`,
};
