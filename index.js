
// &offset=0&orderBy=focDate

const conseguirDataPersonajeComic = () => {
  fetch(`https://gateway.marvel.com/v1/public/comics/${comic.dataset.id}/characters?apikey=89af8964112ea3350775c024cda415b8`,
  )
  .then(res => res.json())
  .then(dataComicPersonaje => {
    console.log('personajes de un comic', dataComicPersonaje)
            // pongo la info aca de comic
    // y aca el html del personaje
})
}


conseguirDataComic = () => {
  fetch(`https://gateway.marvel.com/v1/public/comics/${comic.dataset.id}?apikey=89af8964112ea3350775c024cda415b8`,
        )
        .then(res => res.json())
        .then(dataComic => {
          // en este momento limpio toda la lista de comics de la pagina principal
          // y agrego la info de este comic en particular
  
          console.log('un solo comic', dataComic)
          conseguirDataPersonajeComic()
      })
}


const conseguirDataComics = () => {
  fetch(
    'https://gateway.marvel.com/v1/public/comics?apikey=89af8964112ea3350775c024cda415b8',
  )
    .then(res => res.json())
    .then(data => {
      console.log('todos los comics', data);
      const comics = data.data.results;
      const container = document.querySelector('div');
  
      comics.map(comic => {
        container.innerHTML += `<p class="comic" data-id="${comic.id}">${comic.title}</p> `;
      });
  
      const comicsHTML = document.querySelectorAll('.comic');
      // console.log(comicsHTML);
  
      comicsHTML.forEach(comic => {
        comic.onclick = () => {
          console.log(comic.dataset.id)
          conseguirDataComic()
      }
    })
  })
}

conseguirDataComics()
