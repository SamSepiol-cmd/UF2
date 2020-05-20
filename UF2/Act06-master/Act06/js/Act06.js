
//Tasca 1

document.write("<h2>Introduce números y te daré respuestas</h2>")
document.write("<br></br>")

var num = window.prompt("Introduce dos números y te diré cuál es mayor")
var num2 = window.prompt("Introduce dos números y te diré cuál es mayor");

if (num > num2){
    document.write("Has introducido los números "+num+" y "+num2)
    document.write("<br></br>")
    document.write("El número más grande es: ")
    document.write(num);
    }
    else if (num2 > num){
    document.write("Has introducido los números "+num+" y "+num2)
    document.write("<br></br>")
    document.write("El número más grande es: ")
    document.write(num2);
    }
    else if (num = num2){
    document.write("Has introducido los números "+num+" y "+num2)
    document.write("<br></br>")
    document.write("Los números introducidos son iguales")
    }

document.write("<br></br>")

//Tasca 2

document.write("<h1>Pide una tabla de multiplicar</h1>")

var base = window.prompt("¿Qué tabla de múltiplicar quieres?(sólo número)")
var x = 0;

 for (x = 1; x <= 10; x++){
	tabel = base * x;
        document.write(+base+"x"+x+"="+ tabel + "<br>");
}

//Tasca 3

var nombre = window.prompt("¿Cómo te llamas?")
var edad = window.prompt("¿Cuántos años tienes?")
var email = window.prompt("¿Podrías introducir tu email?")

document.write("<br></br>")

document.write("<br>Hola "+nombre+"</br><br>Moltes gràcies per presentar-te, i dir-me que tens "+edad+".</br><br>Em guardaré el teu correu electrònic ("+email+") per si mai et vull enviar un missatge.</br><br></br><br>A reveure!</br>");
