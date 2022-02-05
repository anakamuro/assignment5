function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".title-set").style.display = "none";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector(".title-set").style.display = "block";
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
 // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
 // slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
 // captionText.innerHTML = dots[slideIndex-1].alt;
}



/*
function rightMedia(){
if(media.image == undefined){
  getVideoMediaList(ID)
}
if(media.video == undefined){
  getPhotographerMediaList(ID)
}
}
rightMedia();
*/




/*
const urlParams = new URLSearchParams(window.location.search);
const photographerID = urlParams.get('id');

let selectedOrder;
let modalMediaIndex = 0;

function fetchData() {
    fetch(`/data/photographers.json`)
    .then(response =>{
        if(!response.ok){
            throw Error('ERROR')
        }
      return response.json();
    })
    .then(data =>
    console.log(data)
    )
    const mediaList = data[0].media
  console.log(mediaList)
    const photographerList = data.photographers;
    console.log(photographerList);
    const photographerIndex = getPhotographer(photographerID, photographerList);
    console.log(photographerIndex);
    const photographerMediaList = getPhotographerMediaList(photographerID, mediaList);
    console.log(photographerMediaList);
 //   let orderPopularity = generateOrderList(photographerMediaList, 'popularity');
  //  const orderDate = generateOrderList(photographerMediaList, 'date');
 //   const orderName = generateOrderList(photographerMediaList, 'name');
 //   const gallerySize = photographerMediaList.length;
 //   selectedOrder = orderPopularity;

 //   generateProfile(photgrapherIndex, photographerList, photographerMediaList);
 //   generateGallery(photographerMediaList, selectedOrder);
 //   generateModalMediaClickEvents();
    console.log(photographerMediaList);
    // List select to modify the order
   

    // Utility function to get the data at a specific index
   
    // Generation of modal media
   
    // Event to move to next media
   
 // Generate the click events on the media cards (open modalMedia + like)
   
    // Add keyboard events to close the display
  } // Also add the use of keyboard arrow keys to do the modalMedia rotation
   
  // get the index of the photographer based on his ID number
  function getPhotographer(ID, photographerList)
  {
      let photographIndex;
      for(var i=0; i<photographerList.length; i++)
      {
          if(photographerList[i].id == ID)
          {
              photographIndex=i;
              return i;
              console.log(i)
          }
      }
  }
  
  // get the list of index of the photograph medias based on his ID number
  function getPhotographerMediaList(ID, baseMediaList)
  {
      let mediaList = [];
      for(var i=0; i<baseMediaList.length;i++)
      {
          if(baseMediaList[i].photographerId == ID)
          {
              mediaList.push(baseMediaList[i]);
          }
      }
      return mediaList;
  }
  *//*
  // Generate the photographer profil and footer numbers
  function generateProfile(index, photographerList, photographerMediaList){
  
  // code goes here
     
  }
  
  // generate a new list of index re-arranged based on the order type
  
  
  // Generate the gallery
  // Call the factory constructors to build a mediaCard
function generateMediaCard(media){
    let cardObj = new mediaCardPartsFactory("card", media);
    let descObj = new mediaCardPartsFactory("desc", media);
   
    if(media.image == undefined){
        var mediaObj = new mediaCardPartsFactory("video", media);
    }
    else{
        var mediaObj  = new mediaCardPartsFactory("image", media);
    }
    cardObj.mediaCard.appendChild(mediaObj.mediaMedia);
    cardObj.mediaCard.appendChild(descObj.mediaDesc);

    return cardObj.mediaCard;
}

// Intermediary between the actual factories classes and the user
class mediaCardPartsFactory{
    constructor(type, mediaData){
        if(type === "card"){
            return new MediaFactory_card();
        }

        if(type === "desc"){
            return new MediaFactory_desc(mediaData);
        }

        if(type === "video"){
            return new MediaFactory_video(mediaData);
        }

        if(type === "image"){
            return new MediaFactory_image(mediaData);
        }
    }
}

// Various factories used to build a mediaCard
class MediaFactory_card{
    constructor(){
        this.mediaCard = document.createElement("div");
        this.mediaCard.classList.add("mediaCard");
    }
}

*/




 







        
const params = new URL(document.location).searchParams;
let ID = parseInt(params.get("id"));

function getPhotographerMediaList(ID) {
  fetch(`/data/photographers.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const media = data.media;
      console.log(media);
      let newmediaList = [];

      for (var i = 0; i < media.length; i++) {
        if (media[i].photographerId == ID) {
          newmediaList.push(media[i]);
          console.log(media[i]);
        }
      }
      console.log(newmediaList)
      return newmediaList;
    })
    .then((media) => {

      const videos = [];
      const images = [];
      for (let i = 0; i < media.length; i++) {
        //  console.log(media[i]);
         // const img = `<div class="img-set column"><a href='/assets/images/photographers/${ID}/${media[i].image}'><img src='/assets/images/photographers/${ID}/${media[i].image}' onclick="openModal();" class="hover-shadow cursor image3" id="myImg"></img></a>
          const img = `<div class="img-set column"><img src='/assets/images/photographers/${ID}/${media[i].image}' onclick="openModal();" class="hover-shadow cursor image3" id="myImg"></img>
          <div class="title-set"><span class="title2">${media[i].title}</span>        <span class="likes">${media[i].likes}<i class="fa-solid fa-heart"></i></span></div>  
          </div>`
          const video = `<div class="video-set"><video src='/assets/images/photographers/${ID}/${media[i].video}'></video>
          <div class="title-set"><span class="likes">${media[i].likes}<i class="fa-solid fa-heart"></i></span></div>  
          </div>
         


          <div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

   

    
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>



    <div class="caption-container">
      <p id="caption"></p>
    </div>

    <div class="column">
    <img src='/assets/images/photographers/${ID}/${media[i].image}' class="image3" />
    </div>
   </div>
   </div>
`    
          videos.push(video)
          images.push(img)

      }
      document.querySelector(".grid").innerHTML = videos.join('\n');
      document.querySelector(".grid").innerHTML = images.join('\n');
  
    });
}
getPhotographerMediaList(ID);

const lightbox = document.createElement('div');
lightbox.id  = 'lightbox';
const grid = document.querySelector('.grid')
//grid.appendChild(lightbox);
//grid.appendChild(images2);
document.body.appendChild(lightbox);

const images2 = document.querySelectorAll('.grid img');
images2.forEach(image =>{
  image.addEventListener('click', e =>{
    console.log('clicked');
    lightbox.classList.add('active')
    console.log(image);
    const img = document.createElement('img');
    img.src = image.src
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    console.log(lightbox)
  })
})

lightbox.addEventListener('click',e => {
  if(e.target !== e.currrentTarget) return
  lightbox.classList.remove('active')
} )

function getVideoMediaList(ID) {
  fetch(`./../../data/photographers.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const media = data.media;
   //   console.log(media);
      let newmediaList = [];

      for (var i = 0; i < media.length; i++) {
        if (media[i].photographerId == ID) {
          newmediaList.push(media[i]);
        //  console.log(media[i]);
        }
      }
      console.log(newmediaList)
    //  return newmediaList;
    })
    .then((media) => { 
      const videos = [];
      for (let i = 0; i < media.length; i++) {
          console.log(media[i]);
          const video = `<div class="video-set"><a href='/assets/images/photographers/${ID}/${media[i].video}'  class="img-big"><video src='/assets/images/photographers/${ID}/${media[i].video}'></video></a>
          <div class="title-set"><span class="likes">${media[i].likes}<i class="fa-solid fa-heart"></i></span></div>  
          </div>`
          videos.push(video);
      //  document.querySelector(".photograph_section").innerHTML = `
      //             <img src='/assets/images/photographers/${ID}/${media[i].image}'>
        //              `;
      }  
      document.querySelector(".grid").innerHTML = videos.join('\n');
    
    });
}
getVideoMediaList(ID);

/*
function getImage(){
  type image : {
    getPhotographerMediaList(ID) 
  }
  type video : {
    getVideoMediaList(ID)
  }
}
getImage();
*/

/*
const image3 = document.querySelectorAll('.grid .image3');
image3.forEach(image =>{
  image.addEventListener('click', e =>{
    console.log('clicked');
  }
  )
}
)


*/

