function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formClose = document.querySelectorAll(".close");
const validationClose = document.getElementById("validation-close")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal event
formClose.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal function
function closeModal() {
  modalbg.style.display = "none";
  console.log("test")
}


//validation de formulaire


let formError = 0

function formValidation(event) {


  //Sélection DOM
  let firstName = document.querySelector("#first");
  let lastName = document.querySelector("#last");
  let email = document.querySelector("#email");
  let birthDate = document.querySelector("#birthdate");
  let quantity = document.querySelector("#quantity");
  let checkLocation = document.getElementsByName("location");
  let checkbox = document.getElementById("checkbox1");


  let errorFirstName = firstName.nextElementSibling.nextElementSibling;
  let errorLastName = lastName.nextElementSibling.nextElementSibling;
  let errorEmail = email.nextElementSibling.nextElementSibling;
  let errorBirthDate = birthDate.nextElementSibling.nextElementSibling;
  let errorQuantity = quantity.nextElementSibling;
  let errorLocation = document.getElementById("error-msg-location")
  let errorCheckBox = checkbox.nextElementSibling.nextElementSibling.nextElementSibling;



  //Validation Prénom
  if (firstName.value.length != 0) {
    if (firstName.value.length < 2) {
      errorFirstName.textContent = "Veuillez renseigner plus de 2 lettres";
      formError = formError + 1

    } else {
      errorFirstName.textContent = "";

    }
  } else {
    errorFirstName.textContent = "Veuillez remplir ce champ";
    formError = formError + 1

  }

  //Validation nom de famille

  if (lastName.value.length != 0) {
    if (lastName.value.length < 2) {
      errorLastName.textContent = "Veuillez renseigner plus de 2 lettres";
      formError = formError + 1

    } else {
      errorLastName.textContent = "";

    }
  } else {
    errorLastName.textContent = "Veuillez remplir ce champ";
    formError = formError + 1

  }


  //Validation Email
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email) {
    let testEmail = regexEmail.test(email.value);
    if (testEmail) {
      errorEmail.textContent = ""

    } else {
      errorEmail.textContent = "Veuillez insérer un email valide"
      formError = formError + 1

    }

  } else {
    errorEmail.textContent = "Veuillez remplir ce champ"
    formError = formError + 1

  }


  //Validation Date de Naissance
  const regexBirthDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

  let testBirthDate = regexBirthDate.test(birthDate.value);
  if (birthDate) {


    if (testBirthDate) {
      errorBirthDate.textContent = ""

    } else {
      errorBirthDate.textContent = "Insérer date de naissance valide"
      formError = formError + 1
    }
  } else {
    errorBirthDate.textContent = "INSERER DATE DE NAISSANCE"
    formError = formError + 1



  }


  //Validation nombre tournoi
  const regexQuantity = /^(0|[1-9][0-9]*)$/;
  if (quantity) {
    let testQuantity = regexQuantity.test(quantity.value);
    if (testQuantity) {
      errorQuantity.textContent = ""

    } else {
      errorQuantity.textContent = "veuillez insérer un chiffre"
      formError = formError + 1

    }
  } else {
    errorQuantity.textContent = "Veuillez insérer une qty"
    formError = formError + 1

  }


  //Validation villes
  let checkboxes = document.querySelectorAll('input[name="location"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  if (values.length > 0) {
    console.log("ville valide")
    errorLocation.textContent = ""

  } else {

    errorLocation.textContent = "Veuillez choisir une ville"
    formError = formError + 1

  }

  //Validation conditions d'utilisation
  if (checkbox.checked) {
    errorCheckBox.textContent = ""

  } else {
    errorCheckBox.textContent = "Veuillez accepter les conditions d'utilisation"
    formError = formError + 1

  }
}


//Submit form
let submit = document.querySelector(".btn-submit");
submit.addEventListener('click', (event) => {
  event.preventDefault();
  formValidation(this)
  console.log(formError)
  if (formError == 0) {
    submit.submit
    let modal = document.getElementById("reserve")
    modal.style.display = "none"
    modalValidation.style.display = "block"

  } else {
    alert("remplir formulaire")
    formError = 0
  }
})


//Close modal
let modalValidation = document.getElementById("validation")
modalValidation.addEventListener("click", (event) => {

  closeModal()

})























///Form validation
//Dom Elements


// let firstName = document.querySelector("#first");

// // selection input nom
// let lastName = document.querySelector("#last");

// // Selection input adresse
// let email = document.querySelector("#email");

// // selection input ville
// let birthDate = document.querySelector("#birthDate");

// // selection input email
// let quantity = document.querySelector("#quantity");
// // console.log(formEmail);

// let checkLocation = document.getElementsByName("location");






// firstName.addEventListener('change', function () {
//   validityFirstName(this);
// });


// lastName.addEventListener('change', function () {
//   validityLastName(this);
// });

// email.addEventListener('change', function () {
//   validityEmail(this);
// });

// quantity.addEventListener('change', function () {
//   validityQuantity(this);
// });

// checkLocation.addEventListener('change', function () {
//   validityLocation(this);
// });




// //Regex
// const regexFirstName = /[-a-zA-Zàâäéèêëïîôöùûüç]{2,128}$/;
// const regexLastName = /[-a-zA-Zàâäéèêëïîôöùûüç]{2,128}$/;
// const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const regexQuantity = /^(0|[1-9][0-9]*)$/;



// //Validation

// const validityFirstName = function (validityName) {

//   let testErrorFirstName = regexFirstName.test(validityName.value);
//   // let error = firstName.nextElementSibling;
//   if (testErrorFirstName) {
//     console.log("valide")
//     return true;
//   } else if (validityName.value.length < 2) {
//     console.log("invalide");
//     return false;
//   } else {
//     console.log("veuillez n'utiliser que des lettres")
//     error.textContent = "Prénom invalide : veuillez n'utiliser que des lettres";
//     return false;
//   }
// }

// const validityLastName = function (validityLastName) {

//   let testErrorLastName = regexLastName.test(validityLastName.value);
//   // let error = firstName.nextElementSibling;
//   if (testErrorLastName) {
//     console.log("valide")
//     return true;
//   } else if (validityLastName.value.length < 2) {
//     console.log("invalide");
//     return false;
//   } else {
//     console.log("veuillez n'utiliser que des lettres")
//     error.textContent = "Prénom invalide : veuillez n'utiliser que des lettres";
//     return false;
//   }
// }


// const validityEmail = function (validityEmail) {

//   let testErrorEmail = regexEmail.test(validityEmail.value);
//   // let error = firstName.nextElementSibling;
//   if (testErrorEmail) {
//     console.log("valide")
//     return true;
//   } else {
//     console.log("veuillez utiliser un email valide")
//     return false;
//   }
// }

// const validityQuantity = function (validityQuantity) {
//   let testErrorQuantity = regexQuantity.test(validityQuantity.value);
//   if (testErrorQuantity) {
//     console.log("valide")
//     return true;

//   } else {
//     console.log("veuillez rentrer une quantité")
//     return false
//   }
// }


// let btnSubmit = document.querySelector(".btn-submit")


// const validityLocation = function (validityLocation) {
//   let checkboxes = document.querySelectorAll('input[name="location"]:checked');
//   let values = [];
//   checkboxes.forEach((checkbox) => {
//     values.push(checkbox.value);
//   });
//   if (values != 0) {
//     console.log("ville valide")
//     console.log(values)
//   } else {
//     console.log(" ville invalide")
//     console.log(values)

//   }

// }



// btnSubmit.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (validityFirstName(firstName) && validityLastName(lastName) && validityEmail(email) && validityQuantity(quantity) && validityLocation(checkboxes)) {
//     console.log("all form valide")
//   } else {
//     console.log("manque des choses")
//   }

// })

// // btnSubmit.addEventListener('click', (event) => {
// //   event.preventDefault();
// //   console.log("test")
// //   let checkboxes = document.querySelectorAll('input[name="location"]:checked');
// //   let values = [];
// //   checkboxes.forEach((checkbox) => {
// //     values.push(checkbox.value);
// //   });
// //   console.log(values)



// // });






// // function validityLocation() {
// //   let testErrorLocation = false;
// //   testLocation.forEach(function (verifyLocation) {
// //     if (verifyLocation.checked) {
// //       locationChecked = true
// //       console.log("valide")
// //     }
// //   })
// // }

// // function checkLocation() {
// //   let locationChecked = false;
// //   const location = document.getElementsByName("location");
// //   location.forEach(function (verifLocation) {
// //     if (verifLocation.checked) {
// //       locationChecked = true;
// //     }
// //   });
// //   if (locationChecked == true) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // // check location
// // var locationChecked = checkLocation();
// // if (locationChecked == false) {
// //   showError("msg-location", "Vous devez cocher une ville");
// // } else {
// //   removeError("msg-location");
// // }