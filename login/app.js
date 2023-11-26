import { login } from "../config/firebase.js";
window.loginr = function () {
  const allInputs = document.getElementsByTagName("input");
  const email = allInputs[0].value;
  const password = allInputs[1].value;
  const user = { email, password };
  login(user);
};