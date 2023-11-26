import { signsup } from "../config/firebase.js";
window.signup = function () {
  var allInputs = document.getElementsByTagName("input");
  var userName = allInputs[0];
  var contact = allInputs[1]
  var email = allInputs[2];
  var password = allInputs[3];
  var confirmPassword = allInputs[4];
  if (
    userName.value == "" ||
    contact.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == ""
  ) {
    alert("Please fill all the inputs");
  } else {
    if (password.value.length < 8) {
      alert("enter the password of 8 characters");
    } else if (password.value != confirmPassword.value) {
      alert("Password is not matched ");
    } else {
      const user = {
        email: email.value,
        password: password.value,
      };
      const userInfo ={
        userName: userName.value,
        contact:contact.value,
      }
      localStorage.setItem('userInfo',JSON.stringify(userInfo))
      signsup(user);
    }
  }
};
// --------------local storage:----------------
// local storage is limited to a device
// local storgae. setitem() for addition of data
// local storgae.getitem() for deletion of data
// it doesnot support the object
// JSON.stringify() use to conver obj or array to string
// .parse() use to convert string to obj
