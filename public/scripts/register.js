// const validator = require("../../middlewares/validator");

window.addEventListener("load", () => {
  //   var form = document.getElementById("Form");
  var user = document.form.user;
  var password = document.form.password;
  var email = document.form.email;
  //   var checkbox = document.form.termsnconds;
  var errors = {};

  user.addEventListener("keyup", () => {
    if (user.value.length < 4 || user.value.length > 24) {
      user.style.border = "2px solid red";
      user.style.backgroundColor = "rgba(255,0,0,0.1)";
      errors[user] = "user";
      // } else {
      //   user.style.border = "0px solid white";
      //   user.style.backgroundColor = "rgba(255,255,255,1)";
      //   delete errors[user];
    }
  });

  password.addEventListener("change", () => {
    if (password.value.length < 2) {
      password.style.border = "2px solid red";
      password.style.backgroundColor = "rgba(255,0,0,0.1)";
      errors[password] = "password";
    } else {
      password.style.border = "0px solid white";
      password.style.backgroundColor = "rgba(255,255,255,1)";
      delete errors[password];
    }
  });

  email.addEventListener("change", () => {
    if (email.value.length < 2 || email.value.length > 32) {
      email.style.border = "2px solid red";
      email.style.backgroundColor = "rgba(255,0,0,0.1)";
      errors[email] = "email";
    } else {
      email.style.border = "0px solid white";
      email.style.backgroundColor = "rgba(255,255,255,1)";
      delete errors[email];
    }
  });

  //   checkbox.addEventListener("submit", () => {
  //     if (!checkbox.checked) {
  //       checkbox.style.border = "2px solid red";
  //       checkbox.style.backgroundColor = "rgba(255,0,0,0.1)";
  //       errors[checkbox] = "checkbox";
  //     } else {
  //       checkbox.style.border = "0px solid white";
  //       checkbox.style.backgroundColor = "rgba(255,255,255,1)";
  //       delete errors[checkbox];
  //     }
  //   });

  form.addEventListener("submit", (e) => {
    // if (!checkbox.checked) {
    //   checkbox.style.border = "2px solid red";
    //   checkbox.style.backgroundColor = "rgba(255,0,0,0.1)";
    //   errors[checkbox] = "checkbox";
    // } else {
    //   checkbox.style.border = "0px solid white";
    //   checkbox.style.backgroundColor = "rgba(255,255,255,1)";
    //   delete errors[checkbox];
    // }
    if (Object.keys(errors).length > 0) {
      e.preventDefault;
    }
  });

  // function validateForm() {

  //     if (user == null || user == '') {
  //       alert('El usuario no puede estar vacio');
  //       console.log('El usuario no puede estar vacio');
  //       return false;
  //     } else if (user.length < 2) {
  //       alert('El usuario debe tener por lo menos 2 caracteres')
  //       console.log('El usuario debe tener por lo menos 2 caracteres')
  //       return false;
  //     } else if (password.length < 6) {
  //       alert('La contraseña debe tener por lo menos 6 caracteres')
  //       console.log('La contraseña debe tener por lo menos 6 caracteres')
  //       return false;
  //     }

  //     var atposition = email.indexOf('@');;
  //     var dotposition = email.lastIndexOf('.')

  //     if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
  //       alert('Por favor inrese un email valido');
  //       return false;
  //     }
  //   }

  //   form.addEventListener('submit', e => {
  //     e.preventDefault();

  //     validateForm();
  //   })
});
