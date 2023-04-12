const d = document,
  n = navigator;
var video;
var photo, localStream;

function webCam() {
  video = d.getElementById("webcam");
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        localStream = stream;
        video.srcObject = stream;
        video.play();

        //profileImageChange(d);
        //webCamChange(d);
        d.getElementById("imgProfile").style.display = "none";
        d.getElementById("webcam").style.display = "block";
        d.getElementById("takePhoto").style.display = "block";
        d.getElementById("useCamera").style.display = "none";
        btnCameraChange(d);
        btnTakePhotoChange(d);
        d.getElementById("uploadPhoto").style.display = "none";
        d.getElementById("cancelPhoto").style.display = "block";
      })
      .catch((err) => {
        alert(err);
        video.srcObject = null;
        console.log("Error: " + err);
      });
  } else {
    alert("No se encontro ninguna Cámara para usar.");
  }
}

function stopCamera() {
  video.pause();
  video.srcObject = null;
  localStream.getTracks()[0].stop();
}

function profileImageChange(d) {
  var container = d.querySelector(".profile-image");
  container.classList.toggle("active");
}

function btnCameraChange(d) {
  var container = d.querySelector(".btnCamera");
  container.classList.toggle("active");
}

function webCamChange(d) {
  var container = d.querySelector(".webcam");
  container.classList.toggle("active");
}

function btnTakePhotoChange(d) {
  var container = d.querySelector(".btnTakePhoto");
  container.classList.toggle("active");
}

function takePhotos() {
  var canvas = d.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, 400, 300);
  d.getElementById("canvas").style.display = "block";
  d.getElementById("webcam").style.display = "none";
  //.getElementById('savePhoto').style.display = 'block';
  //d.getElementById('takePhoto').style.display = 'none';
}

function mostrarImagen(event) {
  var imageSource = event.target.result;
  var previewImage = d.getElementById("imgProfile");
  previewImage.src = imageSource;
}

function uploadPhoto(event) {
  var image = event.target.files[0];
  var lector = new FileReader();
  lector.addEventListener("load", mostrarImagen, false);
  lector.readAsDataURL(image);
}

d.getElementById("image").addEventListener("change", uploadPhoto, false);

function cancelPhotos() {
  d.getElementById("uploadPhoto").style.display = "block";
  d.getElementById("cancelPhoto").style.display = "none";
  d.getElementById("canvas").style.display = "none";
  d.getElementById("takePhoto").style.display = "none";
  d.getElementById("webcam").style.display = "none";
  d.getElementById("imgProfile").style.display = "block";
  d.getElementById("useCamera").style.display = "block";
  d.getElementById("savePhoto").style.display = "none";
  d.getElementById("imgProfile").src = "/img/blank-profile.png";
  stopCamera();
}

function savePhoto() {
  let foto = d.getElementById("imgProfile").image;
  let enlace = document.createElement("a");
  enlace.download = "foto_prueba" + new Date() + ".png";
  enlace.href = foto;
  enlace.click();
}

/*$("#image").on("change", function (){
    var imagen = $(this)[0].files[0];
    console.log(imagen);
});*/

//--------------PERMISO CAMARA-----------//
