const boton = document.querySelector(".boton");
const imgpeli = document.querySelector(".poster");

boton.addEventListener("click", () => {
  cargarPeliculas();
});

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=192e0b9821564f26f52949758ea3c473&language=es&page=1`
    );

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula">
					 	  <a href="unipeli.html?id=${pelicula.id}"><img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });
      document.getElementById("contenedor").innerHTML = peliculas;
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
cargarPeliculas();

const cargarPeliSegundas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=192e0b9821564f26f52949758ea3c473&language=es&page=1`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula">
					  <a href="unipeli.html?id=${pelicula.id}">	<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });

      document.getElementById("contenedorsecundario").innerHTML = peliculas;
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
cargarPeliSegundas();

const cargarPeliTerceras = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=192e0b9821564f26f52949758ea3c473&language=es&page=1`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula">
					  <a href="unipeli.html?id=${pelicula.id}">	<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });
      document.getElementById("contenedortercero").innerHTML = peliculas;
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
cargarPeliTerceras();

const cargarPeliCuartas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula" >
					  <a href="uniseries.html?id=${pelicula.id}"><img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });

      document.getElementById("contenedorcuarto").innerHTML = peliculas;
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
cargarPeliCuartas();

imgpeli.addEventListener("click", () => {});
