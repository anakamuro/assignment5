 function photoFactory(photo){
     const picture = '${photo}'

     function getPhotoCardDOM(){
         const article = document.createElement('article');
         const img = document.createElement('img');
         img.setAttribute("src", picture);
         const div = documnt.createElement('div');
         mainDiv.appendChild(div);
         article.innerHTML= `<img src=${picture}>`;
         article.appendChild(mainDiv);
         mainDiv.style.lineHeight = .1;
         mainDiv.style.textAligh ="center";
         div.style.color ="gray";
         return(article);
     }
     return {getPhotoCardDOM, photo}
 }