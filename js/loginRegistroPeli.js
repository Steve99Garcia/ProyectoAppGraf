function ObtenerListaUsuario(){
    var listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosLs"));
    if(listaUsuarios == null){
        listaUsuarios =
        [
            ['1','Admin','Admin123','1'],
            ['2','Jose','User123','2']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales(pCorreo, pContrasenna){
    var listaUsuarios = ObtenerListaUsuario();
    var bAcceso = false;

    for(var i=0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][2] && pContrasenna == listaUsuarios [i][3]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + '' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listaUsuarios[i][5]);
        }
    }
    return bAcceso;
}