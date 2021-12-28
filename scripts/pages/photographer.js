/*
$(document).ready(function(){
    $('EllieRoseWilkens.jpg').click( function(){
        window.location.href = this.id  + '.html';
    });
});
*/



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