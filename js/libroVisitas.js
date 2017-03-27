
function obtenerTextPreview(){
  var area = document.getElementById("textoArea").value;
  var mostrarTexto = document.getElementById("text");
  mostrarTexto.innerHTML = area;
  var textoPreview = mostrarTexto.innerHTML;
  return textoPreview;
}

//La funcion enviar que estoy usando hasta ahora
function enviar1(){
 var preview=obtenerTextPreview();
 var nuevo=document.createElement("p");
 nuevo.innerHTML=preview;
 var articulos=document.getElementById("contenedorNuevosArticulos").appendChild(nuevo);
 var area = document.getElementById("textoArea");
 area.value="";
}

function eliminarArticulo() {
  //En consola si sirve, pero aqui no ja, quiza se pueda con removeChild 
  var articulo= getElementById("contenedorNuevosArticulos").innerHTML;
  articulo.innerHTML= "";
}
/*
//Pruebas de funcion enviar
function enviar0(){
  var textoCopia = document.getElementById("text").cloneNode();
  var contenedor = document.getElementById("contenedorNuevosArticulos");
  textoCopia.innerText = document.getElementById("text").innerText;
  contenedor.appendChild(textoCopia);
  console.log(textoCopia.innerText);
}
function enviar00(){
  var textoEstilo=document.getElementById("text").innerHTML;

  var textoCopia = textoEstilo.cloneNode();
  var contenedor = document.getElementById("contenedorNuevosArticulos");
  contenedor.appendChild(textoCopia);
  console.log(textoCopia.innerText);
}
*/

//Tamaños de texto
function textoGrande(){
  document.getElementById("text").style.fontSize = "xx-large";
}

function textoMediano(){
  document.getElementById("text").style.fontSize = "medium";
}

function textoChico(){
  document.getElementById("text").style.fontSize = "x-small";
}


//Alineción del texto
function alinearDerecha(){
    document.getElementById("text").style.textAlign="right";
}

function alinearCentro(){
    document.getElementById("text").style.textAlign="center";
}

function alinearIzquierda(){
    document.getElementById("text").style.textAlign ="left";
}


//Color del texto
function colorTexto() {
  var colorT= prompt("Ingresa el código hexadecimal del color que deseas para el texto");
  var textoColorido=document.getElementById("text").style.color= colorT;
  return textoColorido.innerHTML;
}

// Color de fondo
function colorFondo() {
  var colorF= prompt("Ingresa el código hexadecimal del color que deseas para el fondo");
  var fondoColorido= document.getElementById("text").style.background = colorF;
  return fondoColorido.innerHTML;
}
