var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

const botonBorrar = document.getElementById("botonLimpia");
botonBorrar.addEventListener("click", limpiarCanvas);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();//iniciar camino
  lienzo.strokeStyle = color;//Color de linea
  lienzo.moveTo(xinicial, yinicial);//inicio del dibujo
  lienzo.lineTo(xfinal, yfinal);//En donde termina el Dibujo
  lienzo.stroke();//cerramos linea
  lienzo.closePath();//cerrar camino
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#23e63a";//#23e63a
  var colort = "#ff3de5";//#ff3de5
  var espacio = ancho / lineas;

  for (l=0; l < lineas; l++)
  {
      yi = espacio * l;
      xf = espacio * (l +1);
      dibujarLinea(colorcito, 0, yi, xf, 300);
      dibujarLinea(colort, 300, xf, yi, 0);
      console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colort, 299, 1, 1, 1);
  dibujarLinea(colort, 299, 299, 299, 1);
}

function limpiarCanvas() {
  lienzo.clearRect(0, 0, d.width, d.height);
  dibujar("black", 1, 0, 0, 300);
  dibujar("black", 1, 300, 300, 300);
}