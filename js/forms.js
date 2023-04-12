document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById("txtUser").value;
  var clave = document.getElementById("passUser").value;

  let newURL = document.createElement("a");

  if (usuario.length == 0) {
    alert("No has escrito nada en el usuario");
    return;
  }

  if (clave.length < 6) {
    alert("La clave no es válida");
    return;
  }

  if (usuario == "admin") {
    newURL.href = "/DashUpdate.html";
    document.body.appendChild(newURL);
    newURL.click();
    return;
  }

  if (usuario == "usuario") {
    newURL.href = "/index2.html";
    document.body.appendChild(newURL);
    newURL.click();
    return;
  }

  if (usuario == "admin" && document.getElementById("typeUser").checked) {
    newURL.href = "/DashUpdate.html";
    document.body.appendChild(newURL);
    newURL.click();
    return;
  }
  alert("Usuario no encontrado.");
  return;
}

function cerrarSesion() {
  var cerrarSesion = document.getElementById("cerrarSesion");
  var resultado = window.confirm("¿Seguro que quiere cerrar Sesión?");
  if (resultado === true) {
    cerrarSesion.href="index.html";
    cerrarSesion.textContent = "Cerrar Sesión";
    document.body.appendChild(cerrarSesion);
    cerrarSesion.click();
  }
}


