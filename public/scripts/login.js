window.addEventListener("load", () => {
  var form = document.getElementById("form");
  // var userbox = document.userbox;
  var password = document.form.password;
  var email = document.form.email;
  var checkbox = document.form.termsnconds;
  var errors = {};

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
});

// function validateForm() {
//   // var user = document.form.user.value;
//   var password = document.form.password.value;
//   var email = document.form.email.value;

//   if (password.length == "") {
//     alert("La contraseña no puede estar vacia");
//     console.log("La contraseña no puede estar vacia");
//     return false;
//   }

//   var atposition = email.indexOf("@");
//   var dotposition = email.lastIndexOf(".");

//   if (
//     atposition < 1 ||
//     dotposition < atposition + 2 ||
//     dotposition + 2 >= email.length
//   ) {
//     alert("Por favor ingrese un email valido");
//     return false;
//   }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateForm();
// });
