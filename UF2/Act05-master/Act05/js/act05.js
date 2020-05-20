var base = 9;
var x = 0;

document.write("<h1>Bucles: Ejemplo 2</h1>")

//Tasca 1

document.write("<h2>Tabla de multiplicar del 9:</h2>")

 for (x = 1; x <= 10; x++){
	tabel = base * x;
        document.write(+base+"x"+x+"="+ tabel + "<br>");
}

document.write("<br></br>")

//Tasca 2

var base2 = 5;
var y = 10;

document.write("<h2>Tabla inversa de multiplicar del 5:</h2>")

 for (y = 10; y >= 0; y--){
	tabel=base2 * y;
        document.write(+base2+"x"+y+"="+ tabel + "<br>");
}

document.write("<br></br>")

//Tasca 3

var base3 = 0;
var z = 0;

document.write("<h3>Tablas de multiplicar del 1 al 10 con dos bucles</h3>")

for (base3 = 0; base3 <= 10; base3++){
    document.write("<h2>Tabla de multiplicar del "+base3+":</h2>")
 for (z = 1; z <= 10; z++){
	tabel = base3 * z;
        document.write(+base3+"x"+z+"="+ tabel + "<br>");
}
document.write("<br></br>")
}