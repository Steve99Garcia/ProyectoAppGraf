const conteiner = document.querySelector(".contenedor");
const movie = document.querySelector(".movie");
const episodios = document.querySelector(".listaepi");
let para = new URLSearchParams(window.location.search);
console.log(para);
const id_peli = para.get("id");
console.log(id_peli);

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/${id_peli}?api_key=192e0b9821564f26f52949758ea3c473&language=es`
    );

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      let peliculas = "";

      peliculas += `
          <div class="backimg" style="background-image:url(https://image.tmdb.org/t/p/original/${datos.backdrop_path})">
          
            <div class="opaco">
                <h1>${datos.title}</h1>
                <p>${datos.overview}</p>
                <div class="puntos">
                 <h2>Genero: ${datos.genres[0].name} ${datos.genres[1].name}  </h2>
                  <h2>Puntaje: ${datos.vote_average}</h2>
                 
                  <h2>Pais: ${datos.production_countries[0].name}</h2> 
                 </div>
              
              </div>
		         
               
          </div>
            
                
               
                
            
				`;
      console.log(datos.genres[0].name);
      conteiner.innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      conteiner.innerHTML = `<h1>Not Found 404</h1>`;
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();

const cargarPeliculasmovie = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/${id_peli}/videos?api_key=192e0b9821564f26f52949758ea3c473`
    );

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos.results);
      let peliculas = "";

      peliculas = `<a href="https://www.youtube.com/watch?v=${datos.results[0].key}" target="_blank">Reproducir Trailer</a>`;
      movie.innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculasmovie();
