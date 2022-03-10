const info = document.getElementById("info");

function fetchData() {
  fetch(`/data/photographers.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const photographers = data.photographers;
      photographers.map((photographer) => {
        const params = new URL(document.location).searchParams;
        let pid = parseInt(params.get("id"));

        if (photographer.id === pid) {
          document.querySelector(
            ".photograph-header"
          ).innerHTML = `<div class="photograph-header">
            <div id="info">
                  <h2 class="name"><pre>${photographer.name}</pre></h2>
                  <h4 class="place">${photographer.city}, ${photographer.country}</h4>
                  <h4 class="line"><pre>${photographer.tagline}</pre></h4>
                  </div> 
                  <button class="contact_button" onclick="displayModal('${photographer.name}')">Contact Me</button>
                  <div class="photo_section"><img src="assets/photographers/${photographer.portrait}" class="img"></div>
                </div>`;
        }
      });
      //.join('');
    })

    .catch((error) => {
      console.log(error);
    });
}

fetchData();

async function getPhotographers() {
  // TODO : Replace with data from the JSON file
  return await (await fetch("/data/photographers.json")).json();
}

async function displayData(photographers) {
  const photographerHeader = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userPhotoDOM = photographerModel.getUserPhotoDOM();
    console.log(photographerModel);
    photographerHeader.appendChild(userPhotoDOM);
  });
}

async function init() {
  // Retreive photographer data
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
