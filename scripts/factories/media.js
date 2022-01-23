/*params = (new URL(document.location)).searchParams;
let pid = parseInt(params.get('id'));

function fetchPic() {
    fetch(`/data/photographers.json`)
    .then(response =>{
        if(!response.ok){
            throw Error('ERROR')
        }
      return response.json();
    })
    .then(data=>{
     console.log(data);
     const media = data.media;
      media.map((medium) =>{
        
      
	
function getImage(){
    if(`${medium.photographerId}` === "82"){
		var i = 0;
	 var image = [Art_Mine.jpg, Art_Purple_lighht.jpg, Art_Triangle_Man.jpg, Event_18thSnniversary.jpg, Event_Sparklers.jpg,
        Event_WeddingGazebo.jpg, Fashion_Pattern_on_Pattern.jpg, Fasion_Urban_Jungle.jpg, Fashion_Yellow_Beach.jpg];
		console.log(image[0])
		for(var i=0; i<image.length;i++){
			document.querySelector('.photograph_section').innerHTML =   `
			<img src='/assets/images/photographers/${medium.photographerId}/${medium.image[i]}'>
			 <div>${medium.title}${medium.likes}</div>
			 `
		}
    }
	if(`${medium.photographerId}` === "195"){
		for(var i=0; i<image.length;i++)
	image[i] = [Architecture_Corner_Room.jpg, Architecture_Dome.jpg,  Architecture_On_a_hill.jpg,  Architecture_Contrast.jpg, Travel_Adventure_Door.jpg,
        Travel_Bike_and_Stair.jpg, Travel_OpenMountain.jpg, Travel_OpenMountains.jpg, Travel_SunsetonCanals.jpg, Travel_Tower.jpg];
    }
	if(`${medium.photographerId}` === "243"){
		for(var i=0; i<image.length;i++)
	image[i] = [Animals_Rainbow.jpg, Event_BenevidesWedding.jpg,  Event_PintoWedding.jpg,  Event_SeassideWedding.jpg, Portrait_Background.jpg,
        Portrait_Nora.jpg, Portrait_Wednesday.jpg, Travel_HillsideColor.jpg, Travel_Lonesome.jpg];
	}
	if(`${medium.photographerId}` == "527"){
		for(var i=0; i<image.length;i++)
	image[i] = [Portrait_AfternoonBreak.jpg, Portrait_Alexandra.jpg,  Portrait_Shaw.jpg,  Portrait_Sunkissed.jpg, Travel_Boat_Wanderer.jpg,
        Travel_Bridge_into_Forest.jpg, Travel_On_the_Road.jpg, Travel_Outdoor_Baths.jpg, Travel_Road_into_Hill.jpg];
	}
	if(`${medium.photographerId}` === "925"){
		for(var i=0; i<image.length;i++)
	image[i] = [Animals_Majesty.jpg, Event_Emcee.jpg,  Event_keyboardCheck.jpg,  Event_ProductPitch.jpg, Event_VentureConference.jpg,
        Fashion_Melody_Red_on_Stripes.jpg, Fashion_Wings.jpg, Sport_2000_with_8.jpg, Sport_Butterfly.jpg];
	}
	if(`${medium.photographerId}` ===  "925"){
		for(var i=0; i<image.length;i++)
	image[i] = [Architecture_Connected_Curves.jpg, Architecture_Cross_Bar.jpg,  Architecture_Horseshoe.jpg,  Architecture_Water_on_Modern.jpg, Architecture_White_Light.jpg,
        Sport_Jump.jpg, Sport_Next_Hold.jpg, Sport_Race_End.jpg, Sport_Sky_Cross.jpg, sport_water_tunnel.jpg];
	}
	return `${image}`;
	console.log(image);
}


getImage();

// if(medium.photographerId === pid || medium.photographerId === !undefined){
         //   for (let i = 0; i < medium.image.length; i++) {
          
          
      //  }
     // }
    })
     //.join('');
    
    })

    .catch(error =>{
        console.log(error);
    })
  }

 fetchPic();
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

      if (media.id !== 8328953 | 83958935 | 394583434 | 5234343 | 9259398453 | 952343423){
      const images = [];
      for (let i = 0; i < media.length; i++) {
        //  console.log(media[i]);
          const img = `<div class="img-set"><a href='/assets/images/photographers/${ID}/${media[i].image}' data-lightbox="mygallery" class="img-big"><img src='/assets/images/photographers/${ID}/${media[i].image}' class="img2"></img></a>
          <div class="title-set"><span class="title2">${media[i].title}</span>        <span class="likes">${media[i].likes}<i class="fa-solid fa-heart"></i></span></div>  
          </div>`  
          images.push(img);

          

      //  document.querySelector(".photograph_section").innerHTML = `
      //             <img src='/assets/images/photographers/${ID}/${media[i].image}'>
        //              `;


      }
      document.querySelector(".grid").innerHTML = images.join('\n');
    } else {
      const videos = [];
      for (let i = 0; i < media.length; i++) {
          console.log(media[i]);
          const video = `<div class="video-set"><video src='/assets/images/photographers/${ID}/${media[i].video}'></video>
          <div class="title-set"><span class="likes">${media[i].likes}<i class="fa-solid fa-heart"></i></span></div>  
          </div>`
          videos.push(video);
      //  document.querySelector(".photograph_section").innerHTML = `
      //             <img src='/assets/images/photographers/${ID}/${media[i].image}'>
        //              `;
      }  
      document.querySelector(".grid").innerHTML = videos.join('\n');
    }
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
      if (media.id === 8328953 | 83958935 | 394583434 | 5234343 | 9259398453 | 952343423){
      const videos = [];
      for (let i = 0; i < media.length; i++) {
          console.log(media[i]);
          const video = `<div class="video-set"><video src='/assets/images/photographers/${ID}/${media[i].video}'></video>
          <div class="title-set"><span class="likes">${media[i].likes}<i class="fa-solid fa-heart"></i></span></div>  
          </div>`
          videos.push(video);
      //  document.querySelector(".photograph_section").innerHTML = `
      //             <img src='/assets/images/photographers/${ID}/${media[i].image}'>
        //              `;
      }  
      document.querySelector(".grid").innerHTML = videos.join('\n');
    }
    });
}
getVideoMediaList(ID);









/*
getPhotographerMediaList(ID, MediaList);

getPhotographerMediaList(82, [
  Art_Mine.jpg,
  Art_Purple_lighht.jpg,
  Art_Triangle_Man.jpg,
  Event_18thSnniversary.jpg,
  Event_Sparklers.jpg,
  Event_WeddingGazebo.jpg,
  Fashion_Pattern_on_Pattern.jpg,
  Fasion_Urban_Jungle.jpg,
  Fashion_Yellow_Beach.jpg,
]);

getPhotographerMediaList(195, [
  Architecture_Corner_Room.jpg,
  Architecture_Dome.jpg,
  Architecture_On_a_hill.jpg,
  Architecture_Contrast.jpg,
  Travel_Adventure_Door.jpg,
  Travel_Bike_and_Stair.jpg,
  Travel_OpenMountain.jpg,
  Travel_OpenMountains.jpg,
  Travel_SunsetonCanals.jpg,
  Travel_Tower.jpg,
]);

getPhotographerMediaList(243, [
  Animals_Rainbow.jpg,
  Event_BenevidesWedding.jpg,
  Event_PintoWedding.jpg,
  Event_SeassideWedding.jpg,
  Portrait_Background.jpg,
  Portrait_Nora.jpg,
  Portrait_Wednesday.jpg,
  Travel_HillsideColor.jpg,
  Travel_Lonesome.jpg,
]);

getPhotographerMediaList(527, [
  Portrait_AfternoonBreak.jpg,
  Portrait_Alexandra.jpg,
  Portrait_Shaw.jpg,
  Portrait_Sunkissed.jpg,
  Travel_Boat_Wanderer.jpg,
  Travel_Bridge_into_Forest.jpg,
  Travel_On_the_Road.jpg,
  Travel_Outdoor_Baths.jpg,
  Travel_Road_into_Hill.jpg,
]);

getPhotographerMediaList(925, [
  Animals_Majesty.jpg,
  Event_Emcee.jpg,
  Event_keyboardCheck.jpg,
  Event_ProductPitch.jpg,
  Event_VentureConference.jpg,
  Fashion_Melody_Red_on_Stripes.jpg,
  Fashion_Wings.jpg,
  Sport_2000_with_8.jpg,
  Sport_Butterfly.jpg,
]);

getPhotographerMediaList(930, [
  Architecture_Connected_Curves.jpg,
  Architecture_Cross_Bar.jpg,
  Architecture_Horseshoe.jpg,
  Architecture_Water_on_Modern.jpg,
  Architecture_White_Light.jpg,
  Sport_Jump.jpg,
  Sport_Next_Hold.jpg,
  Sport_Race_End.jpg,
  Sport_Sky_Cross.jpg,
  sport_water_tunnel.jpg,
]);
*/
// if(medium.photographerId === pid || medium.photographerId === !undefined){

/*        
        }
     // }
    })
     //.join('');
    
    })

    .catch(error =>{
        console.log(error);
    })
  }

 fetchPic();
*/
