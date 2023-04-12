const fila = document.querySelector(".contenedor-carousel");
const filase = document.querySelector("#ccs");
const filater = document.querySelector("#cct");
const filacuar = document.querySelector("#ccc");

const flechaIzquierdas = document.querySelector(".flecha-izquierda");
const flechaDerechas = document.querySelector(".flecha-derecha");

const flechaIzquierdase = document.querySelector("#flecha-izquierda-secun");
const flechaDerechase = document.querySelector("#flecha-derecha-secun");

const flechaIzquierdater = document.querySelector("#flecha-izquierda-ter");
const flechaDerechater = document.querySelector("#flecha-derecha-ter");

const flechaIzquierdacuar = document.querySelector("#flecha-izquierda-cuar");
const flechaDerechasecuar = document.querySelector("#flecha-derecha-cuar");
// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerechas.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierdas.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
});

flechaDerechase.addEventListener("click", () => {
  filase.scrollLeft += filase.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierdase.addEventListener("click", () => {
  filase.scrollLeft -= filase.offsetWidth;
});

flechaDerechater.addEventListener("click", () => {
  filater.scrollLeft += filater.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierdater.addEventListener("click", () => {
  filater.scrollLeft -= filater.offsetWidth;
});

flechaDerechasecuar.addEventListener("click", () => {
  filacuar.scrollLeft += filacuar.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierdacuar.addEventListener("click", () => {
  filacuar.scrollLeft -= filacuar.offsetWidth;
});
