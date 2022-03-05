const getPhotoContent = fetch(`/data/photographers.json`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

function getImageContent(mediaData){
  return `<div class="img-set column"><img src='/assets/images/photographers/${ID}/${mediaData.image}' onclick="openModal();currentSlide(${mediaData.id});clicked()" alt=${mediaData.title} class="hover-shadow cursor image3" id="myImg"></img>
  <div class="title-set"><span class="title2">${mediaData.title}</span>        <button class="likes" id = ${mediaData.id} onclick= increaseLike(${mediaData.id}) >${mediaData.likes}<i class="fa-solid fa-heart"></i></button></div>  
  </div>
  `    
}

function getVideoContent(mediaData){
return  `<div class="video-set"><video controls src='/assets/images/photographers/${ID}/${mediaData.video}' alt=${mediaData.title} width="300px" height="300px"'></video>
<div class="title-set"><span class="title2">${mediaData.title}</span>  <button class="likes" id = ${mediaData.id} onclick= increaseLike(${mediaData.id}) >${mediaData.likes}<i class="fa-solid fa-heart"></i></div>  
</div>
<div id="myModal" class="modal" aria-hidden="true" role="dialog">
<span class="close cursor" onclick="stopModal()">&times;</span>
<div class="modal-content">
 
  
  
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
  <div class="caption-container">
    <p id="caption"></p>
  </div>
  <div class="column">
  <video src='/assets/images/photographers/${ID}/${mediaData.video}' class="image3" />
  </div>
 </div>
 </div>
`    
}

class mediaCardPartsFactory{
  constructor(type, mediaData){
    if(type === "image"){
 
      this.content = getImageContent(mediaData)
    }
    if(type === "video"){
      
      this.content = getVideoContent(mediaData)
    }
  }
}


const params = new URL(document.location).searchParams;
let ID = parseInt(params.get("id"));

function getPhotographerMediaList(ID) {
 // fetchJSON()
fetch(`/data/photographers.json`)
  
  getPhotoContent.then((data) => {
    const media = data.media;
    let newmediaList = [];

    for (var i = 0; i < media.length; i++) {
      if (media[i].photographerId == ID) {
        newmediaList.push(media[i]);
     
      }
    }
 
    return newmediaList;
  })
  .then((media) => {
     let media_values = '';
    const media_content = [];
    let media_detail ="";
    const media_detail_list = []
    media_dropdown = '';
    for (let i = 0; i < media.length; i++) {
      //  console.log(media[i]);
       // const img = `<div class="img-set column"><a href='/assets/images/photographers/${ID}/${media[i].image}'><img src='/assets/images/photographers/${ID}/${media[i].image}' onclick="openModal();" class="hover-shadow cursor image3" id="myImg"></img></a>
       if(media[i].image){
        factoryInstance = new mediaCardPartsFactory("image", media[i])
        media_values = factoryInstance.content

        media_detail = `<div id="unique-${media[i].id}"  class="myslides column">
        <img src='/assets/images/photographers/${ID}/${media[i].image}' alt=${media[i].title} class="image3"/>
        </div>
        <a class="prev" onclick="plusSlides(-1,${ID})">&#10094;</a>
        <a class="next" onclick="plusSlides(1,${ID})">&#10095;</a>`
       }
      if(media[i].video){
        factoryInstance = new mediaCardPartsFactory("video", media[i])
        media_values = factoryInstance.content

        media_detail = `<div id="unique-${media[i].id}"  class="myslides column">
        <video controls src='/assets/images/photographers/${ID}/${media[i].video}' alt=${media[i].title} class="image3" style="
        height: 300px;
        width: 300px;
    " />
        </div>
        <a class="prev" onclick="plusSlides(-1,${ID})">&#10094;</a>
        <a class="next" onclick="plusSlides(1,${ID})">&#10095;</a>`
       }
        
       media_content.push(media_values)
       media_detail_list.push(media_detail)

    }
   // document.querySelector(".dropdown").innerHTML = media_dropdown.join('\n');
    document.querySelector(".grid").innerHTML = media_content.join('\n');
    document.querySelector(".modal-content").innerHTML = media_detail_list.join('\n');
  

  });
}
getPhotographerMediaList(ID);




function openModal() {
document.getElementById("myModal").style.display = "block";
document.querySelector(".title-set").style.display = "none";
document.querySelector(".drop-dowm-menu").style.display = "none";
}

function stopModal() {
document.getElementById("myModal").style.display = "none";
document.querySelector(".title-set").style.display = "block";
document.querySelector(".drop-dowm-menu").style.display = "block";
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

var count = 0
function plusSlides(n,ID) {

  getPhotoContent.then((data) => {
    const media = data.media;
    let newmediaList = [];
    
    for (var i = 0; i < media.length; i++) {
      if (media[i].photographerId == ID) {
        newmediaList.push(media[i]);
      }
    }
  
    return newmediaList;
  })
  .then((media) => {
   // x = count
    x = Math.floor(Math.random() * (media.length-1));
  // for (let x = 0; x < media.length; x++) {
   showSlides(media[x].id)
    //count = count + 1;
   console.log(count)
  }
  )
//  showSlides(slideIndex += n);
}

function currentSlide(n) {

showSlides(slideIndex = n);

}
function clicked() {
console.log('clicked');
}


function showSlides(n) {

var i;
var individual_id;
var slides = document.getElementsByClassName("myslides");

// var captionText = document.getElementById("caption");
// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
// console.log(n)
var unique_id = "unique-"+n
var individual_id = document.getElementById(unique_id);
individual_id.style.display = "block";

// slides[slideIndex-1].style.display = "block";
//dots[slideIndex-1].className += " active";
// captionText.innerHTML = dots[slideIndex-1].alt;
}

// const lightbox = document.createElement('div');
// lightbox.id  = 'lightbox';
// const grid = document.querySelector('.grid')
// //grid.appendChild(lightbox);
// //grid.appendChild(images2);
// document.body.appendChild(lightbox);

// const images2 = document.querySelectorAll('.grid img');
// images2.forEach(image =>{
//   image.addEventListener('click', e =>{
//     console.log('clicked');
//     lightbox.classList.add('active')
//     console.log(image);
//     const img = document.createElement('img');
//     img.src = image.src
//     while(lightbox.firstChild){
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//     console.log(lightbox)
//   })
// })

// lightbox.addEventListener('click',e => {
//   if(e.target !== e.currrentTarget) return
//   lightbox.classList.remove('active')
// } )

function sortData(parameter){
if (parameter == "popularity"){
  jsonResponse("popularity")
}
if (parameter == "date"){
  jsonResponse("date")
}
if (parameter == "name"){
  jsonResponse("name")
}
}


function jsonResponse(parameter){

    getPhotoContent.then((data) => {
  const media = data.media;
  let newmediaList = [];
  
  for (var i = 0; i < media.length; i++) {
    if (media[i].photographerId == ID) {
      newmediaList.push(media[i]);
    }
  }
  value = newmediaList
  if (parameter=="popularity"){
    data = sortByPopularity(newmediaList);
    updateDOM(data)
  }
  if (parameter=="date"){
    data = sortByDate(newmediaList);
    updateDOM(data)
  }
  if (parameter=="name"){
    data = sortByTitle(newmediaList);
    updateDOM(data)
  }
})

}

function sortByPopularity(data){
data.sort(function(a,b){
  return a.likes - b.likes
})
return data
}


function sortByDate(data){
data.sort(function(a,b){
  return new Date(a.date) - new Date(b.date)
})
return data
}

function sortByTitle(data){
data.sort(function(a,b){
  return a.title.localeCompare(b.title)
})
return data
}

function updateDOM(media){
let media_values = '';
    const media_content = [];
    let media_detail ="";
    const media_detail_list = []
    media_dropdown = '';
    for (let i = 0; i < media.length; i++) {
       if(media[i].image){
        factoryInstance = new mediaCardPartsFactory("image", media[i])
        media_values = factoryInstance.content

        media_detail = `<div id="unique-${media[i].id}"  class="myslides column">
        <img src='/assets/images/photographers/${ID}/${media[i].image}' class="image3" alt=${media[i].title}/>
        </div>
        <a class="prev" onclick="plusSlides(-1,${ID})">&#10094;</a>
        <a class="next" onclick="plusSlides(1,${ID})">&#10095;</a>`
       }
      if(media[i].video){
        factoryInstance = new mediaCardPartsFactory("video", media[i])
        media_values = factoryInstance.content

        media_detail = `<div id="unique-${media[i].id}"  class="myslides column">
        <video controls src='/assets/images/photographers/${ID}/${media[i].video}' alt=${media[i].title} class="image3" style="
        height: 300px;
        width: 300px;
    " />
        </div>
        <a class="prev" onclick="plusSlides(-1,${ID})">&#10094;</a>
        <a class="next" onclick="plusSlides(1,${ID})">&#10095;</a>`
       }
        
       media_content.push(media_values)
       media_detail_list.push(media_detail)

    }
    document.querySelector(".grid").innerHTML = media_content.join('\n');
    document.querySelector(".modal-content").innerHTML = media_detail_list.join('\n');
  
}

function increaseLike(id){
  button = document.getElementById(id)
  button.innerText = parseInt(button.innerText)+1 
  button.innerHTML = button.innerHTML+ `<i class="fa-solid fa-heart"></i>`
}


var imgCount = 0
window.addEventListener('keyup', (e) => {

  getPhotoContent.then((data) => {
    const media = data.media;
    let newmediaList = [];
    
    for (var i = 0; i < media.length; i++) {
      if (media[i].photographerId == ID) {
        newmediaList.push(media[i]);
      }
    }
  
    return newmediaList;
  })
  .then((media) => {
   var x = imgCount;
   console.log("image count",imgCount)
   if (e.key === "ArrowLeft" || e.key === 'left') {
     if (x < media.length+1 && x>=1) {
      imgCount = imgCount - 1;
      showSlides(media[x].id)
  } else {
    x = media.length - 1
    imgCount = media.length - 1
    showSlides(media[x].id) 
  }
} else {
  if (x >= media.length) {
    showSlides(media[0].id)
    imgCount = 0
    x = 0
  } else {
    showSlides(media[x].id)
    imgCount = imgCount + 1;  
  }
}
// x = count
//x = Math.floor(Math.random() * (media.length-1));
// for (let x = 0; x < media.length; x++) {
//showSlides(media[x].id)
//count = count + 1;
//console.log(count)
})
})


/*
const imageTotalNumber = `${media[i].length}`;
let currentSlideNumber = 1;
prevImageElement.addEventlisener('click', () => {
  if (currentSlideNumber !== 1){
     currentSlideNumber--
     mainImageElement.setAttribute('src', `img/img${currentSlideNumber}.jpg`)
     changeSlidesStatus()
  }
})
nextImageElement.addEventlisener('click', () => {
  if (currentSlideNumber !== imageTotalNumber){
     currentSlideNumber++
     mainImageElement.setAttribute('src', `img/img${currentSlideNumber}.jpg`)
     changeSlidesStatus()
  }
})
function changeSlidesStatus(){
  if(currentSlideNumber === 1){
    prevImageElement.classList.add('inActive')
  } else {
    prevImageElement.classList.remove('inActive')
  }
  if(currentSlideNumber === imageTotalNumber){
    nextImageElement.classList.add('inActive')
  } else {
    nextImageElement.classList.remove('inActive')
  }
}
changeSlideStastus();
for(i = 0; i < imageTotalNumber; i++){
  const liElement = document.createElement('li')
  liElement.style.backgroundImage = `url(img/img${i + 1}.jpg)`
liElement.addEventListenerr('click', ()=> {
  liElement.setAtttribute('src', `img/img${i + 1}.jpg`)
  currentSlideNumber = i + 1
  changeSlideStatus()
})
  imageListElement.appendChild(liElement)
}
*/