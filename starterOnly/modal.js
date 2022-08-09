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