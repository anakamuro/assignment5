/*
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}*/

var contactButton = document.getElementById("contact_button");
const modalDisplay = document.getElementById("contact_modal");
var contactText = document.getElementsByClassName("contact-text")[0];
//const modalA = document.querySelector(".modalA");
const photographSection = document.querySelector("div#grid.photograph_section.grid");
const closeButton = document.getElementById("closeModal");
const dropDownMenu = document.getElementById("drop-dowm-menu")
/*
contactButton.addEventListener('click', function(){
    modalDisplay.style.display = "block";
    modalA.style.display = "block";
    photographSection.style.display = "none";
})
*/

function displayModal(photographerName) {
   modalDisplay.style.display = "block";

   contactText.innerHTML = `Contact me <br> ${photographerName}`
   //modalA.style.display = "none";
   photographSection.style.display = "none";
   dropDownMenu.style.display = "none";
}


contactButton.addEventListener("click", displayModal);
closeButton.addEventListener("click", closeModal);

function stopModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function closeModal() {
    modalDisplay.style.display = "none";
    //modalA.style.display = "none";
    photographSection.style.display = "block";
    dropDownMenu.style.display = "block";
}

function redirect(){
    window.location.href= window.location.href;
  }

var form = document.getElementById('form');

contactButton.addEventListener('submit', function(event){
    event.preventDefault()

    var firstName = document.getElementById('firstName').value
    console.log(firstName)

    var lastName = document.getElementById('lastName').value
    console.log(lastName)

    var email = document.getElementById('email').value
    console.log(email)

    var message = document.getElementById('message').value
    console.log(message)
})