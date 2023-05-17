// ### VARIABLES ###

// Array de palabras
var palabras = [["atlantico", "Un océano"],
 ["everest", "Un monte"], 
 ["relampago", "Antecede al trueno"], 
 ["jirafa", "Un animal"], 
 ["luxemburgo", "Un país"], 
 ["uruguay", "Un país"], 
 ["ilustracion", "Representación gráfica"], 
 ["excursion", "Actividad en la naturaleza"], 
 ["empanadilla", "De la panadería"], 
 ["pastel", "De la pastelería"], 
 ["colegio", "Lugar para estudiar"], 
 ["carrera", "Competición"], 
 ["mermelada", "Confitura"],
 ["guitarra", "Instrumento musical"],
 ["piano", "Instrumento musical"],
 ["trompeta", "Instrumento musical"],
 ["portugal", "Un país"],
 ["telefono", "Un aparato"],
 ["espejo","Reflejo"]]

var palabra = "";

var rand = 0;

var oculta = [];

var hueco = document.getElementById("palabra");

var cont = 6;

var buttons = document.getElementsByClassName('letra');

var btnInicio = document.getElementById("reset");


function generaPalabra() {
  rand = (Math.random() * palabras.length).toFixed(0);
  palabra = palabras[rand][0].toUpperCase();
  console.log(palabra);
}

function pintarGuiones(num) {
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

function generarAbcdario (a,z) {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }
  }
}


function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
  }
  compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 800);
}

function pista() {
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}

function compruebaFin() {
  if( oculta.indexOf("_") == -1 ) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";
    setTimeout(alert("La palabra era: "+palabra), 800);
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  generarAbcdario("a","z");
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
}

window.onload = inicio();