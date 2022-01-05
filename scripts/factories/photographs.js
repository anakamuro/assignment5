 function photographerFactory(data){
    const { name, portrait, city, tagline, country, price, id } = data;
     const picture = `assets/photographers/${portrait}`;
    console.log(name);
     function getUserCardDOM(){
         const article = document.createElement('article');
         const h2 = document.createElement( 'h2' );
         const h4 = document.createElement( "h4" );
         const h6 = document.createElement( 'h6' );
        const h6B = document.createElement( 'h6' );
        const div = document.createElement( 'div' );
        const mainDiv = document.createElement( 'div' );
         const img = document.createElement('img');
         img.setAttribute('id', `${id}`)
        article.innerHTML = `<a href="photographer.html?id=${id}"><img src=${picture} id=${id}></a>`;
         img.setAttribute("src", picture);
         mainDiv.appendChild(div);
        // article.innerHTML= `<img src=${picture}>`;
        // article.appendChild(mainDiv);
        h2.textContent = name;
      h6.innerHTML = `$${price}  /day`;
      h4.innerHTML = `${city}, ${country}`;
      h6B.textContent = tagline;
        const header = document.getElementsByClassName('photographe-header');
        div.appendChild(h2);
      div.appendChild(h4);
      div.appendChild(h6);
    
      div.appendChild(h6B);
      mainDiv.appendChild(div);
      header.appendChild(mainDiv);
       const info = document.getElementById('info');
     h2.textContent = name;
    info.appendChild(h2);
      header.appendChild(info);
         mainDiv.style.lineHeight = .1;
         mainDiv.style.textAligh ="center";
         div.style.color ="gray";
         return(article);
     }
     return {name, picture, getUserCardDOM, city, tagline, country, price,  id}
    }
