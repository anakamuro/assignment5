

const params = (new URL(document.location)).searchParams;
const id  = params.get('id');
const name = params.get('name');

async function getPhotos(name, id) {
    // TODO : Replace with data from the JSON file
   return await fetch(`/assets/images/photographers/` + `${name}` + `${id}/Animals_Rainbow.jpg`);
}

async function displayData(photos) {
    const photoSection = document.querySelector(".photo_section");
   
    photos.forEach((photo) => {
        console.log(photo);
        const photoModel = photoFactory(photo);
        const userCardDOM = photoModel.getUserCardDOM();
        photoSection.appendChild(userCardDOM);
    });
};

const photosMimi243 = [`assets/images/photographers/Mimi243/Animal_Rainbow.jpg`,
`assets/images/photographers/Mimi243/Event_BenevidesWedding.jpg`,
`assets/images/photographers/Mimi243/Event_PintoWedding.jpg`,
`assets/images/photographers/Mimi243/Event_SeasideWedding.jpg`,
`assets/images/photographers/Mimi243/Portrait_Background.jpg`,
`assets/images/photographers/Mimi243/Portrait_Nora.jpg`,
`assets/images/photographers/Mimi243/Portrait_Wednesday.jpg`,
`assets/images/photographers/Mimi243/Travel_Hillside.jpg`,
`assets/images/photographers/Mimi243/Travel_Lonesome.jpg`,
]

const photosTracy82 = [ `assets/images/photographers/Tracy82/Art_mine.jpg`,
`assets/images/photographers/Tracy82/Art_Mine.jpg`,
`assets/images/photographers/Tracy82/Art_Purple_light.jpg`,
`assets/images/photographers/Tracy82/Art_Triangle_Man.jpg`,
`assets/images/photographers/Tracy82/Event_Sparklers.jpg`,
`assets/images/photographers/Tracy82/Event_WeddingGazebo.jpg`,
`assets/images/photographers/Tracy82/Fashion_Pattern_on_Pattern.jpg`,
`assets/images/photographers/Tracy82/Fashion_Urban_Jungle.jpg`,
`assets/images/photographers/Tracy82/Fashion_Yellow_Beach.jpg`,
]

const photosNabeel527 = [ `assets/images/photographers/Nabeel527/Portrait_Afternoon.jpg`,
`assets/images/photographers/Nabeel527/Portrait_Alexandra.jpg`,
`assets/images/photographers/Nabeel527/Portrait_Shaw.jpg`,
`assets/images/photographers/Nabeel527/Portrait_Sunkissed.jpg`,
`assets/images/photographers/Nabeel527/Travel_Boat_Wonderer.jpg`,
`assets/images/photographers/Nabeel527/Travel_Bridge_into_Forest.jpg`,
`assets/images/photographers/Nabeel527/Travel_On_the_Road.jpg`,
`assets/images/photographers/Nabeel527/Travel_Outdoor_Baths.jpg`,
`assets/images/photographers/Nabeel527/Travel_Road_into_Hill.jpg`,
]

const photosRhode925 = [ `assets/images/photographers/Rhode925/Animal_Majesty.jpg`,
`assets/images/photographers/Rhode925/Event_Emcee.jpg`,
`assets/images/photographers/Rhode925/Event_keyboardCheck.jpg`,
`assets/images/photographers/Rhode925/Event_ProductPItch.jpg`,
`assets/images/photographers/Rhode925/EventVentureConference.jpg`,
`assets/images/photographers/Rhode925/Fashion_Melody_Red_On_Stripes.jpg`,
`assets/images/photographers/Rhode925/Fashion_Wings.jpg`,
`assets/images/photographers/Rhode925/Sport_2000_with_8.jpg`,
`assets/images/photographers/Rhode925/Sport_Butterfly.jpg`,
]

const photosMarcel195 = [ `assets/images/photographers/Marcel195/Architecture_Corner_Room.jpg`,
`assets/images/photographers/Marcel195/Architecture_Dome.jpg`,
`assets/images/photographers/Marcel195/Architecture_On_a_hill.jpg`,
`assets/images/photographers/Marcel195/Architecture_Contrast.jpg`,
`assets/images/photographers/Marcel195/Travel_adventure.jpg`,
`assets/images/photographers/Marcel195/Travel_Bike_and_Stair.jpg`,
`assets/images/photographers/Marcel195/Travel_Open_Mountain.jpg`,
`assets/images/photographers/Marcel195/Travel_SunsetonCanals.jpg`,
`assets/images/photographers/Marcel195/Travel_Tower.jpg`,
`assets/images/photographers/Marcel195/Architecture_Corner_Room.jpg`,
]

const photosEllie930 = [ `assets/images/photographers/Ellie930/Architecture_Connected_Curves.jpg`,
`assets/images/photographers/Ellie930/Architecture_Cross_Bar.jpg`,
`assets/images/photographers/Ellie930/Architecture_HorseShoe.jpg`,
`assets/images/photographers/Ellie930/Architecture_Water_on_Modern.jpg`,
`assets/images/photographers/Ellie930/Architecture_White_light.jpg`,
`assets/images/photographers/Ellie930/Sport_Jump.jpg`,
`assets/images/photographers/Ellie930/Sport_Next_Hold.jpg`,
`assets/images/photographers/Ellie930/Sport_Race_End.jpg`,
`assets/images/photographers/Ellie930/Sport_Sky_Cross.jpg`,
`assets/images/photographers/Ellie930/Sport_water_tunnel.jpg`,
]

var map = new Map();

map.set("Mimi243", photosMimi243);
map.set("Tracy82", photosTracy82);
map.set("Nabeel527", photosNabeel527);
map.set("Rhode925", photosRhode925);
map.set("Marcel195", photosMarcel195);
map.set("Ellie930", photosEllie930);

async function init(name, id) {
    // Retreive photographer data
    const  photos  = map.get(`${name}` + `${id}`)
    displayData(photos);
    console.log(photos)
};

init();


















/*
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