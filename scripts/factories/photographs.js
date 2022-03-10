function photographerFactory(photographers) {
  const { name, portrait, city, tagline, country, price, id } = photographers;
  const picture = `assets/photographers/${portrait}`;
  console.log(name);
  function getUserPhotoDOM() {
    /* const header = document.createElement('header');
         const h6B = document.createElement( 'h6' );
        const div = document.createElement( 'div' );
        const mainDiv = document.createElement( 'div' );
         const img = document.createElement('img');*/
    img.setAttribute("src", picture);
    mainDiv.appendChild(div);
    mainDiv.appendChild(div);
    header.appendChild(mainDiv);
    const photoplace = document.querySelector(".photo_section");
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.borderRadius = "50%";
    return header;
  }
  return { name, picture, getUserPhotoDOM, city, tagline, country, price, id };
}
