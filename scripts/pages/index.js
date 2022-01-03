  
   async function getPhotographers() {
        // TODO : Replace with data from the JSON file
       return await(await fetch("/data/photographers.json")).json();
   }
       
   
    

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
       
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function displayData(photographers) {
        const photographHeader = document.querySelector(".photograph-header");
       
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographHeader.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    