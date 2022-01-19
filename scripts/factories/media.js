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

params = (new URL(document.location)).searchParams;
let ID = parseInt(params.get('id'));
/*
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
        */




function getPhotographerMediaList(ID, MediaList)

	{

	    let newmediaList = [];

	    for(var i=0; i<MediaList.length;i++)

	    {

	        if(MediaList[i].photographerId == ID)

	        {

	            newmediaList.push(MediaList[i]);

	        }

	    }

	    return newmediaList;

	}

	getPhotographerMediaList(ID, MediaList);
    
	getPhotographerMediaList(82, [Art_Mine.jpg, Art_Purple_lighht.jpg, Art_Triangle_Man.jpg, Event_18thSnniversary.jpg, Event_Sparklers.jpg,
        Event_WeddingGazebo.jpg, Fashion_Pattern_on_Pattern.jpg, Fasion_Urban_Jungle.jpg, Fashion_Yellow_Beach.jpg]);
    
	getPhotographerMediaList(195, [Architecture_Corner_Room.jpg, Architecture_Dome.jpg,  Architecture_On_a_hill.jpg,  Architecture_Contrast.jpg, Travel_Adventure_Door.jpg,
        Travel_Bike_and_Stair.jpg, Travel_OpenMountain.jpg, Travel_OpenMountains.jpg, Travel_SunsetonCanals.jpg, Travel_Tower.jpg]);
    
	getPhotographerMediaList(243, [Animals_Rainbow.jpg, Event_BenevidesWedding.jpg,  Event_PintoWedding.jpg,  Event_SeassideWedding.jpg, Portrait_Background.jpg,
        Portrait_Nora.jpg, Portrait_Wednesday.jpg, Travel_HillsideColor.jpg, Travel_Lonesome.jpg]);
    
	getPhotographerMediaList(527, [Portrait_AfternoonBreak.jpg, Portrait_Alexandra.jpg,  Portrait_Shaw.jpg,  Portrait_Sunkissed.jpg, Travel_Boat_Wanderer.jpg,
        Travel_Bridge_into_Forest.jpg, Travel_On_the_Road.jpg, Travel_Outdoor_Baths.jpg, Travel_Road_into_Hill.jpg]);

    getPhotographerMediaList(925, [Animals_Majesty.jpg, Event_Emcee.jpg,  Event_keyboardCheck.jpg,  Event_ProductPitch.jpg, Event_VentureConference.jpg,
        Fashion_Melody_Red_on_Stripes.jpg, Fashion_Wings.jpg, Sport_2000_with_8.jpg, Sport_Butterfly.jpg]);

	getPhotographerMediaList(930, [Architecture_Connected_Curves.jpg, Architecture_Cross_Bar.jpg,  Architecture_Horseshoe.jpg,  Architecture_Water_on_Modern.jpg, Architecture_White_Light.jpg,
        Sport_Jump.jpg, Sport_Next_Hold.jpg, Sport_Race_End.jpg, Sport_Sky_Cross.jpg, sport_water_tunnel.jpg]);

// if(medium.photographerId === pid || medium.photographerId === !undefined){
            for (let i = 0; i < newmediaList.length; i++) {
            document.querySelector('.photograph_section').innerHTML =   `
           <img src='/assets/images/photographers/${ID}/${newmediaList[i]}'>
            `
			}
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


