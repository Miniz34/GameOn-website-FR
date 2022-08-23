function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const OpenModal = (selector) => { selector.style.display = "block" }
const CloseModal = (selector) => { selector.style.display = "none" }


// DOM Elements
//Modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formClose = document.querySelectorAll(".close");
const validationClose = document.getElementById("validation-close");
const modalValidation = document.getElementById("validation");

//Form entries
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkLocation = document.getElementsByName("location");
const checkbox = document.getElementById("checkbox1");

//Error messages
const errorFirstName = firstName.nextElementSibling.nextElementSibling;
const errorLastName = lastName.nextElementSibling.nextElementSibling;
const errorEmail = email.nextElementSibling.nextElementSibling;
const errorBirthDate = birthDate.nextElementSibling.nextElementSibling;
const errorQuantity = quantity.nextElementSibling;
const errorLocation = document.getElementById("error-msg-location");
const errorCheckBox = checkbox.nextElementSibling.nextElementSibling.nextElementSibling;


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => OpenModal(modalbg)));

// Close modal event
formClose.forEach((btn) => btn.addEventListener("click", () => CloseModal(modalbg)));

//Close validation modal event
modalValidation.onclick = (event) => { CloseModal(modalbg) }




//////////////////////////////
///validation de formulaire///
//////////////////////////////

//Fonction vérification de chaque entrée
function formValidation() {
  const e1 = firstNameValidation(),
    e2 = lastNameValidation(),
    e3 = emailValidation(),
    e4 = birthDateValidation(),
    e5 = quantityValidation(),
    e6 = cityValidation(),
    e7 = CGUValidation();
  return (e1 && e2 && e3 && e4 && e5 && e6 && e7);
}



//Validation Prénom
function firstNameValidation() {
  errorFirstName.textContent = "";

  if (firstName.value.length < 2) {
    errorFirstName.textContent = "Veuillez renseigner plus de 2 lettres";
    return false;
  }
  return true;
}


//Validation nom de famille
function lastNameValidation() {
  errorLastName.textContent = "";

  if (lastName.value.length < 2) {
    errorLastName.textContent = "Veuillez renseigner plus de 2 lettres";
    return false;
  }
  return true;
}


//Validation Email
function emailValidation() {
  errorEmail.textContent = ""
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regexEmail.test(email.value)) {
    errorEmail.textContent = "Veuillez insérer un email valide"
    return false;
  }
  return true;
}


//Validation Date de Naissance
function birthDateValidation(event) {
  errorBirthDate.textContent = ""

  //Calcul de l'age
  function getAge(birthDate) {
    var ageInMilliseconds = new Date() - new Date(birthDate.value);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
  }

  if ((getAge(birthDate) < 18 || getAge(birthDate) > 99)) {
    errorBirthDate.textContent = "Vous devez avoir entre 18 et 99 ans"
    return false;
  }
  return true;

}


//Validation nombre tournoi
function quantityValidation(event) {
  errorQuantity.textContent = ""
  const regexQuantity = /^(0|[1-9][0-9]*)$/;
  if (!regexQuantity.test(quantity.value)) {
    errorQuantity.textContent = "veuillez insérer un chiffre"
    return false;
  }
  return true;
}


//Validation villes
function cityValidation() {
  errorLocation.textContent = "";

  if ([...document.querySelectorAll('input[name="location"]:checked')].length < 1) {
    errorLocation.textContent = "Veuillez choisir une ville"
    return false;
  }
  return true;
}

//Validation conditions d'utilisation
function CGUValidation() {
  errorCheckBox.textContent = "";

  if (!checkbox.checked) {
    errorCheckBox.textContent = "Veuillez accepter les conditions d'utilisation";
    return false;
  }
  return true;
}

//Event listener form
firstName.onchange = () => { firstNameValidation() }
lastName.onchange = () => { lastNameValidation() }
email.onchange = () => { emailValidation() }
birthDate.onchange = () => { birthDateValidation() }
quantity.onchange = () => { quantityValidation() }
checkLocation.forEach(i => i.oninput = () => cityValidation());
checkbox.onchange = () => { CGUValidation() }


//Submit form
let submit = document.querySelector(".btn-submit");
submit.addEventListener('click', (event) => {
  event.preventDefault();
  if (formValidation(this)) {
    console.log("C'est bon !")
    // submit.submit
    const modal = document.getElementById("reserve")
    CloseModal(modal);
    OpenModal(modalValidation);
  }
})
