const imagenes = [
    'img/carrusel1.jpeg',
    'img/carrusel2.jpeg',
    //falta agregar una imagen, con un tamaño similar para que no quede mal
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
    setInterval(MoverDerecha, 5000);
  }
  
  iniciarCarrusel();