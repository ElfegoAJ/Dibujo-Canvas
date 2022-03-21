//ElfegoAdairJuarezArias
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#23e63a";//#23e63a
var colort = "#ff3de5";//#ff3de5

for (l=0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colort, 300, xf, yi, 0);
    console.log("Linea " + l);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colort, 299, 1, 1, 1);
dibujarLinea(colort, 299, 299, 299, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();//iniciar camino
  lienzo.strokeStyle = color;//Color de linea
  lienzo.moveTo(xinicial, yinicial);//inicio del dibujo
  lienzo.lineTo(xfinal, yfinal);//En donde termina el Dibujo
  lienzo.stroke();//cerramos linea
  lienzo.closePath();//cerrar camino
}
