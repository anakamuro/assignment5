function photographerFactory(data) {
    const { name, portrait, city, tagline, country, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h4 = document.createElement( "h4" );
        const a =  document.createElement( "a" );
        const h4B = document.createElement( "h4" );
        const h6 = document.createElement( 'h6' );
        const span = document.createElement( 'span' );
        const span1 = document.createElement( 'span' );
        const h6B = document.createElement( 'h6' );
        const span2 = document.createElement( 'span' );
        const div = document.createElement( 'div' );
        const mainDiv = document.createElement( 'div' );
        const id = document.createElement( 'id' );


        
        span1.textContent = "$";
        h6B.textContent = price;
        span2.textContent = "/day";
        h2.textContent = name;
        h4.textContent = city;
        a.textContent = ", ";
        h4B.textContent = country;
        h6.textContent = tagline;

        h2.appendChild(id);
        console.log(id);
        article.appendChild(img);
        span.appendChild(h4);
        span.appendChild(a);
        span.appendChild(h4B);
        div.appendChild(span1);
        div.appendChild(h6B);
        div.appendChild(span2);
        h4.style.display = "inline";
        h4B.style.display = "inline";
        h6B.style.display ="inline";
        mainDiv.appendChild(h2);
        mainDiv.appendChild(span);
        mainDiv.appendChild(h6);
        mainDiv.appendChild(div);
        article.appendChild(mainDiv);
        mainDiv.style.lineHeight = .1;
        mainDiv.style.textAlign = "center";
        span.style.color = "#D3573C";
        div.style.color = "gray";


        
    
       
        return (article);
    }
    return { name, picture, getUserCardDOM, city, tagline, country, price,  id}
}