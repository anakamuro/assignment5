/*
fetch("photographers.json")
.then(response => {
   return response.json();
})
.then(function(data){
    console.log(data);
})
/*
data: {photographers: photographers};
const data = data.photographer;


const { name, portrait, city, tagline, country, price, id } = photographers;
const header = document.getElementsByClassName('photographe-header');
const h2 = document.createElement( 'h2' );
const info = document.getElementById('info');
const pic = document.getElementById('pic');
h2.textContent = name;
info.appendChild(h2);
header.appendChild(info);
/*
function photographerFactory(data) {
    const { name, portrait, city, tagline, country, price, id } = data;
  
    const picture = `assets/photographers/${portrait}`;
    
    
  
    function getUserCardDOM() {
        const header = document.getElementsByClassName('photographe-header');
        const info = document.getElementById('info');
        const pic = document.getElementById('pic'); 
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        info.appendChild(h2);
        header.appendChild(info);
        
        /*
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h4 = document.createElement( "h4" );
        const h6 = document.createElement( 'h6' );
        const h6B = document.createElement( 'h6' );
        const span = document.createElement( 'span' );
        const div = document.createElement( 'div' );
        const mainDiv = document.createElement( 'div' );
        const a = document.createElement( 'a' );
       // a.href =`photographer.html`;
    
        h2.textContent = name;
        h6.innerHTML = `$${price}  /day`;
        h4.innerHTML = `${city}, ${country}`;
        h6B.textContent = tagline;
        img.setAttribute("id", id);
        a.setAttribute("href", `photographer.html`);
        
    
        div.appendChild(h2);
        div.appendChild(h4);
        div.appendChild(h6);
        div.appendChild(a);
        div.appendChild(h6B);
        mainDiv.appendChild(div);
        article.innerHTML = `<a href="photographer.html?id=id"><img src=${picture} 'id'=${id}></a>`;
        console.log('id', id);
        
        article.appendChild(mainDiv);
        mainDiv.style.lineHeight = .1;
        mainDiv.style.textAlign = "center";
        h4.style.color = "#D3573C";
        div.style.color = "gray";
        
  
        
    
       
        return (article);
    }
    return { name, picture, getUserCardDOM, city, tagline, country, price,  id}
  }
 
 */