 function photographerFactory(data){
    const { name, portrait, city, tagline, country, price, id } = data;
     const picture = `assets/photographers/${portrait}`;
    console.log(name);
     function getUserPhotoDOM(){
         const header = document.createElement('header');
         const h2 = document.createElement( 'h2' );
         const h4 = document.createElement( "h4" );
         const h6 = document.createElement( 'h6' );
        const div = document.createElement( 'div' );
        const mainDiv = document.createElement( 'div' );
         const img = document.createElement('img');
       //  img.setAttribute('id', `${id}`)
         img.setAttribute("src", picture);
         mainDiv.appendChild(div);
        // article.innerHTML= `<img src=${picture}>`;
        // article.appendChild(mainDiv);
        h2.textContent = name;
      h4.innerHTML = `${city}, ${country}`;
      h6.textContent = tagline;
     //   const header = document.getElementsByClassName('photographe-header');
        div.appendChild(h2);
      div.appendChild(h4);
      div.appendChild(h6);
    
      mainDiv.appendChild(div);
      header.appendChild(mainDiv);
      const info = document.getElementById('info');
      info.appendChild(mainDiv);
      const photoplace = document.querySelector('.photo_section');
      photoplace.appendChild(img);
     // img.className=".image-font";
      //img.style.width="100px";
      header.appendChild(photoplace);
     /*  const info = document.getElementById('info');
     h2.textContent = name;
    info.appendChild(h2);
      header.appendChild(info);
         mainDiv.style.lineHeight = .1;
         mainDiv.style.textAligh ="center";
         div.style.color ="gray";*/
         return(header);
     }
     return {name, picture, getUserPhotoDOM, city, tagline, country, price,  id}
    }
