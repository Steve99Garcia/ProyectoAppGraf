function fntDelPersona() {
  swal({
    title: "¿Realmente quiere eliminar el registro?.",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Eliminando registro...", {
        icon: "success",
      });
    } else {
      swal("Se ha cancelado la accion");
    }
  });
}


function fntupdate() {
  swal({
    title: "¿Quieres agregar un nuevo contenido?.",
    text: "",
    icon: "success",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Agregando...", {
        icon: "success",
      });
    } else {
      swal("Se ha cancelado la accion");
    }
  });
}

function fntupdateuser() {
  swal({
    title: "¿Esta seguro que deseas agregar un usuario acá?.",
    text: "",
    icon: "success",
    buttons: true,
    dangerMode: true,

  }).then((willDelete) => {
    if (willDelete) {
      swal("Agregando...", {
        icon: "success",
      });
    } else {
      swal("Se ha cancelado la accion");
    }
  });
}

function fntupdateuserRecu() {
  swal({
    title:
      "¿Desear dar permiso para enviar un codigo de confirmacion a su correo?",
    text: "",
    icon: "success",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Se ha enviado un codigo de confirmacion a su correo.", {
        icon: "success",
      });
    } else {
      swal("Se ha cancelado la accion");
    }
  });
}

function fntRegi() {
  swal({
    title:
      "¿Desear registrarse en esta pagina?",
    text: "",
    icon: "success",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Se ha registrado con exito.", {
        icon: "success",
      });
    } else {
      swal("Se ha cancelado la accion");
    }
  });
}