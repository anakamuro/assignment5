async function getPhotographs() {
    // TODO : Replace with data from the JSON file
   return await(await fetch("/data/photographers.json")).json();
}

       
    async function displayData(photographers) {
        const photographerHeader = document.querySelector(".photograph-header");
       
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographerHeader.appendChild(userCardDOM);
        });
    };
    
    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographs();
        displayData(photographers);
    };
     

 
    init();



  
   
/*
  header.innerHTML = `<div class="photograph-header">
  <div id="info">${name}</div>
  <button class="contact_button" onclick="displayModal()">Contact Me</button>
<div class="photograph_section"></div>
</div>`;


  var Person = function (name, tagline, country, city, id){
    var person= {};
    person.name = name;
    person.tagline = tagline;
    person.country = country;
    person.city = city;
    person.id = id;
    return person;
}
console.log('person');

    

  /*
    async function displayData(photographs) {
        const photographHeader = document.querySelector(".photograph-header");
       
        photographs.forEach((photograph) => {
            const photographModel = photographFactory(photograph);
            const userCardDOM = photographModel.getUserCardDOM();
            photographHeader.appendChild(userCardDOM);
        });
    };
    
    async function init() {
        // Retreive photographer data
        const { photographs } = await getPhotographs();
        displayData(photographs);
    };
     

 
    init();



/*
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response)
    }
  };
  xhttp.open("GET", "photographers.json", true);
  xhttp.send();
*/
/*
async function getPhotos(id) {
    // TODO : Replace with data from the JSON file
   return await fetch(`/photographers/`+`${id}`);
}
*/
/*
const params = (new URL(document.location)).searchParams;
const id  = params.get('id');


var Person = function (name, tagline, country, city, id){
    var person= {};
    person.name = name;
    person.tagline = tagline;
    person.country = country;
    person.city = city;
    person.id = id;
    return person;
}
*/







/*
   const data = photographers.data;
function Photographer(data){
    thid.id = data.id;
    this.name = data.name;
    return data
}
console.log(data);




/*
 var Mimi = Person("Mimi Keel", "See the beauty of daily moments", "UK", "London", 243)
console.log(Mimi);

async function displayData(photographers) {
    const photographSection = document.querySelector(".photograph_section");
   
    photographers.forEach((photographer) => {
        console.log(photographer);
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographSection.appendChild(userCardDOM);
    });
};
/*
const params = (new URL(document.location)).searchParams;
const id  = params.get('id');
const name = params.get('name');
console.log(params);



async function displayData(photographs) {
    const photographSection = document.querySelector(".photograph_section");
   
    photographs.forEach((photograph) => {
        console.log(photograph);
        const photographModel = photographFactory(photograph);
        const userCardDOM = photographModel.getPhotoCardDOM();
        photographSection.appendChild(userCardDOM);
    });
};



var map = new Map();

map.set("Mimi243", photosMimi243);
map.set("Tracy82", photosTracy82);
map.set("Nabeel527", photosNabeel527);
map.set("Rhode925", photosRhode925);
map.set("Marcel195", photosMarcel195);
map.set("Ellie930", photosEllie930);

async function init(name, id) {
    // Retreive photographer data
    const  photographs  = map.get(`${name}` + `${id}`)
    displayData(photographs);
    console.log(photographs);
};

init();


           
















console.log(`Value for 'id': ${myID}`)
for (const [key, value] of usp) {
    console.log(`${key} => ${value}`)
}
usp.set('name', 'aki');
usp.set('city', 'dorchester');



console.log(usp.toString());





/*
$(document).ready(function(){
    $('EllieRoseWilkens.jpg').click( function(){
        window.location.href = this.id  + '.html';
    });
});


const myURL = new URL(`http://localhost:3000/photographer.html`);
myURL.search ="?id=id";

console.log(myUrl);
console.log(myUrl.toString())
*/


/*
const image1 = document.querySelector('EllieRoseWilkens.jpg');
image1.addEventListener('click', function (e) {
   window.location.href="scripts/pages/Ellie930.html";
  })


//Add JavaScript code linked to the photographer.html page
/*
window.onload = function(){
 try{
var url_string = 'http://www.localhost:3000/photographer.html'
var url_string = (window.location.href).toLowerCase();
const url = new URL('url_string');
var id = url.searchParams.get("id");
console.log(id);
 }catch(err){
     console.log(err);
 }
}*/
/*
myUrl ="photograhers.html";
myUrl.search ="?id=id";
console.log(myUrl.searchParams.get("id"));
*/
/*
let params = (new URL(document.location)).searchParams;
let id = params.get('id');
url = `photographer.html?id=id`
const images = document.querySelectorAll('img');
 images.forEach(function(image){
     image.addEventListener('click', url.searchParams.get(id));  
    });
console.log("id", id);
*/
/*
const urlParams = new URLSearchParams(`photographers.html/?id=id`);
      const id = urlParams.get('id');
      alert(id);

      let params = (new URL(document.location)).searchParams;
      let name = params.get('name'); // is the string "Jonathan Smith".
      let age = parseInt(params.get('age')); // is the number 18


 /*
  if (imageID) {
    imageID.forEach((id) => {
        id.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e.target.id)
           })
        })
    }
/*
function photographerFactory(data) {
const { name, portrait, city, tagline, country, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

   

picture.addEventListener('click', (e)=>{
 console.log(e.target);
 // Create anchor element.
 var a = document.createElement('a'); 
                  
 // Create the text node for ancho function(){
        window.location.href ='r element.
 var link = document.createTextNode("This is link");
   
 // Append the text node to anchor element.
 a.appendChild(link); 
   
 // Set the title.
 a.title = "This is Link"; 
   
 // Set the href property.
 a.href = "photographer.html"; 
   
 // Append the anchor element to the body.
 document.body.appendChild(a); 
})

return { name, picture, getUserCardDOM, city, tagline, country, price,  id}
}
*/