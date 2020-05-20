
//var Tasca 1

var primera = 10;
var segona = 20;
var tercera = 30;
var quarta = 40;

//Tasca 1

if (primera >= segona && primera >= tercera && primera >= quarta) {
  document.write("<h1>Tasca 1</h1>");
  document.write("<h3>La más grande es:</h3>")
  document.write(primera);
  document.write("<br/>");
}
    else if (segona >= primera && segona >= tercera && segona >= quarta) {
        document.write("<h1>Tasca 1</h1>");
        document.write("<h3>La más grande es:</h3>")
        document.write(segona);
        document.write("<br/>");
}

    else if (tercera >= primera && tercera >= segona && tercera >= quarta) {
        document.write("<h1>Tasca 1</h1>");
        document.write("<h3>La más grande es:</h3>")
        document.write(tercera);
        document.write("<br/>");
}

    else {
      document.write("<h1>Tasca 1</h1>");
      document.write("<h3>La más grande es:</h3>")
      document.write(quarta);
      document.write("<br/>");
}

//var Tasca 2

var uno = 30;
var dos = 20;
var tres = 10;
var cuatro = 40;

//Tasca 2

if (uno <= dos && uno <= tres && uno <= cuatro) {
  document.write("<h1>Tasca 2</h1>");
  document.write("<h3>La más pequeña es:</h3>")
  document.write(uno);
  document.write("<br/>");
}
    else if (dos <= uno && dos <= tres && dos <= cuatro) {
      document.write("<h1>Tasca 2</h1>");
      document.write("<h3>La más pequeña es:</h3>")
      document.write(dos);
      document.write("<br/>");
}

    else if (tres <= uno && tres <= dos && tres <= cuatro) {
      document.write("<h1>Tasca 2</h1>");
      document.write("<h3>La más pequeña es:</h3>")
      document.write(tres);
      document.write("<br/>");
}

    else {
      document.write("<h1>Tasca 2</h1>");
      document.write("<h3>La más pequeña es:</h3>")
      document.write(cuatro);
      document.write("<br/>");
}

//var Tasca 3

var un = 10;
var deux = 20;
var trois = 30;
var quatre = 40;

//Tasca 3

if (un !== deux && deux !== trois && trois !== quatre) {
  document.write("<h1>Tasca 3</h1>");
  document.write("<h3>No son iguales</h3>");
}
