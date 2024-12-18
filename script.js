const imagenes = [
  'img/carrusel1.jpeg',
  'img/carrusel2.jpeg',
  'img/carrusel3.jpeg'
];

let contador = 0;
const imgElement = document.getElementById('iCarrusel');

function adelante() {
  contador++;
  if (contador > imagenes.length - 1) {
    contador = 0;
  }
  imgElement.src = imagenes[contador];
}

function atras() {
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  imgElement.src = imagenes[contador];
}

document.getElementById('bAdelante').addEventListener('click', adelante);
document.getElementById('bAtras').addEventListener('click', atras);

function iniciarCarrusel() {
  imgElement.src = imagenes[contador];
  setInterval(adelante, 5000);
}
function abrirCaja(e) {
  var id = e.currentTarget.getAttribute('href').split('#')[1];
  const infos = document.querySelectorAll('.info');
  infos.forEach(info => info.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
iniciarCarrusel();