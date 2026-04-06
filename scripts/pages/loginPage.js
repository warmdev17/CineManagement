import { $ } from "../utils/dom.js";
import { handleLogin } from "../controllers/loginController.js";

const loginForm = $("#login-form");

loginForm.addEventListener("submit", handleLogin);
