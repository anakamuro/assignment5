async function getPhotographers() {
    // TODO : Replace with data from the JSON file
   return await(await fetch("/data/photographers.json")).json();
}

       
    async function displayData(photographers) {
        const photographerHeader = document.querySelector(".photograph-header");
       
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userPhotoDOM = photographerModel.getUserPhotoDOM();
            console.log(photographerModel)
            photographerHeader.appendChild(userPhotoDOM);
        });
    };
    
    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
     

 
    init();













/*
async function init(){
    const response = await fetch('/data/photographers.json');
    const data = await  response.json();
    
    const { photographers } = data;
    const { name, portrait, city, tagline, country, price, id } = {photographers};
    console.log(`${name}`);
    console.log(photographers)
    document.querySelector('.photograph-header').innerHTML = `name`
}

init()

function init(id){
fetch('/data/photographers.json')
.then(response =>response.json())
.then(json=>{
    for(let i = 0; i < json.photographers.length; i++){
    console.log(json.photographers[i].name)
    document.querySelector('.photograph-header').innerHTML = `${json.photographers[i].name}`
}})
}

init()

*/