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

// Ajout de la croix, du bouton d'inscription et du contenu du modal
const modalBtnOff = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".close");
const modal = document.querySelector(".content");
const btnSubmit = document.querySelector(".btn-submit");
const formulaire = document.querySelector(".modal-body");
// Initiatlisation d'une variable d'état
let isOpen = true;
// Evenement au click sur la croix et le bouton d'inscription
modalClose.addEventListener("click", closeMe);
modalBtn.forEach((btn) => btn.addEventListener("click", closeMe));
// Fonction d'ouverture et fermeture de la pop-up
function closeMe() {
  if (isOpen === false) {
    modal.style.display = "none";
    modalbg.style.display = "none";
    isOpen = true;
  } else {
    modal.style.display = "block";
    modalbg.style.display = "block";
    isOpen = false;
  }
}

//Ajout de la fonction pour remonter en haut de page sur le bouton "s'inscrire" pour mobil
document.querySelector(".scroll-up").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});

//Vérification de l'adresse email
const regexEmail = new RegExp("^[\\w-\\.]+@([\\w-\\.]+\\.)+[\\w-]{2,4}$");
//Déclaration des variables pour avoir la valeur des inputs
const formulaireEmail = document.getElementById("email");
const formulairePrenom = document.getElementById("first");
const formulaireNom = document.getElementById("last");
const formulaireBirth = document.getElementById("birthdate");
const formulaireTournoi = document.getElementById("quantity");
const formulaireCondition = document.getElementById("checkbox1");

//Evenement au click pour vérifier si ce que l'utilisateur écrit ; appliquer une correction si besoin
formulaireEmail.addEventListener("change", function () {
  if (regexEmail.test(formulaireEmail.value) === false) {
    document.querySelector(".emailErrorMessage").innerHTML = "Veuillez indiquer une adresse Email correcte";
    document.querySelector("#email").style.border = "red 3px solid";
  } else {
    document.querySelector(".emailErrorMessage").innerHTML = "";
    document.querySelector("#email").style.border = "";
  }
});

formulairePrenom.addEventListener("change", function () {
  if (!formulairePrenom.validity.valid) {
    document.querySelector(".firstNameErrorMessage").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prenom";
    document.querySelector("#first").style.border = "red 3px solid";
  } else {
    document.querySelector(".firstNameErrorMessage").innerHTML = "";
    document.querySelector("#first").style.border = "";
  }
});

formulaireNom.addEventListener("change", function () {
  if (!formulaireNom.validity.valid) {
    document.querySelector(".lastNameErrorMessage").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    document.querySelector("#last").style.border = "red 3px solid";
  } else {
    document.querySelector(".lastNameErrorMessage").innerHTML = "";
    document.querySelector("#last").style.border = "";
  }
});

formulaireBirth.addEventListener("change", function () {
  if (!formulaireBirth.validity.valid) {
    document.querySelector(".birthErrorMessage").innerHTML = "Vous devez entrer votre date de naissance";
    document.querySelector("#birthdate").style.border = "red 3px solid";
  } else {
    document.querySelector(".birthErrorMessage").innerHTML = "";
    document.querySelector("#birthdate").style.border = "";
  }
});

formulaireTournoi.addEventListener("change", function () {
  if (!formulaireTournoi.validity.valid) {
    document.querySelector(".tournoiErrorMessage").innerHTML = "Vous devez entrer un nombre de participation";
    document.querySelector("#quantity").style.border = "red 3px solid";
  } else {
    document.querySelector(".tournoiErrorMessage").innerHTML = "";
    document.querySelector("#quantity").style.border = "";
  }
});

formulaireCondition.addEventListener("change", function () {
  if (!formulaireCondition.checked === true) {
    document.querySelector(".conditionErrorMessage").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions";
  } else {
    document.querySelector(".conditionErrorMessage").innerHTML = "";
  }
});

//Vérification de la validité des champs du formulaire lorsque l'utilisateur click sur "C'est parti"
btnSubmit.addEventListener("click", function (e) {
  if (
    regexEmail.test(formulaireEmail.value) === true &&
    formulaireNom.validity.valid === true &&
    formulairePrenom.validity.valid === true &&
    formulaireBirth.validity.valid === true &&
    formulaireTournoi.validity.valid === true &&
    formulaireCondition.checked === true
  ) {
    //Création de l'affichage de remerciement si tout est valide
    e.preventDefault();
    //Suppression du formulaire
    formulaire.removeChild(formulaire.children[0]);
    //Création de l'affichage
    const confirmation = document.createElement("div");
    confirmation.setAttribute("class", "content");
    confirmation.innerHTML =
      "<p class='remerciement_text'> Merci pour votre inscription </p> <input id='refresh-fermer' class='btn-submit btn-fermer' value='Fermer'/>";
    formulaire.appendChild(confirmation);
    modalClose.setAttribute("id", "refresh");
    //Ajout du refresh de la page au clic sur la croix et du bouton "Fermer" pour remettre le formulaire à zero
    const refreshPage = document.querySelector("#refresh");
    const refreshPageFermer = document.querySelector("#refresh-fermer");
    refreshPage.addEventListener("click", function () {
      location.reload();
    });
    refreshPageFermer.addEventListener("click", function () {
      location.reload();
    });
    //Création d'une message d'erreur si tous les champs ne sont pas valides
  } else {
    alert("Veuillez remplir les champs manquants");
    e.preventDefault();
  }
});
