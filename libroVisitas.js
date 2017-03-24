
function obtenerTextPreview(){
  var area = document.getElementById("textoArea").value;
  var mostrarTexto = document.getElementById("text");
  mostrarTexto.innerHTML = area;
  var textoPreview = mostrarTexto.innerHTML;
  return textoPreview;
}

function enviar(){
  var textoCopia = document.getElementById("text").cloneNode();
  var contenedor = document.getElementById("contenedorNuevosArticulos");
  textoCopia.innerText = document.getElementById("text").innerText;
  contenedor.appendChild(textoCopia);
  console.log(textoCopia.innerText);

}

function textoGrande(){
  document.getElementById("text").style.fontSize = "xx-large";
}
