
//Add JavaScript code linked to the photographer.html page

const images = document.querySelectorAll('img');
 images.forEach(function(image){
     image.addEventListener('click', function(){
        window.location.href ='http://www.localhost:3000/photographer.html';  
    });
});




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
                  
 // Create the text node for anchor element.
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