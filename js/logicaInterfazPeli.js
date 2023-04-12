document.querySelector('#btnIniciar').addEventListener('click',
ingresar);

function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasenna = document.querySelector('#txtContra').value;

    bAcceso = validarCredenciales(sCorreo, sContrasenna);
    
    if(bAcceso == true){
        ingresar();
    }

}
function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'DashUpdate.html';
            break;
        case '2':
            window.location.href = 'index.html';
            break;
            default:
                window.location.href = 'DashUpdate.html';
                break;

    }
}