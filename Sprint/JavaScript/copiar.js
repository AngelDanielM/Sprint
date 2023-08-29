//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas -- e / else
    //g es para toda la linea a oración
    //m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");
  
    //document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("mensaje").innerHTML = txtCifrado;
    document.getElementById("copiar").style.dispaly = "show";
    document.getElementById("copiar").style.dispaly = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas -- e / else
    //g es para toda la linea a oración
    //m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");
  
    //document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("mensaje").innerHTML = txtCifrado;
    document.getElementById("copiar").style.dispaly = "show";
    document.getElementById("copiar").style.dispaly = "inherit";
  }
  
  function copy() {
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy")
    alert("copio")
  }