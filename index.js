var textoInput;
var textoEncript;
var textoDecript;
var textoCopiado;
var validar = false;

let btn_encript = document.querySelector('.btn_encrip');
let btn_decript = document.querySelector('.btn_descrip');
let btn_copiar = document.querySelector('.btn_cop');

function seleccionartexto(){
    var textoInput = document.getElementById('txt_msj').value;
    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoInput)||
        (/[0-9]/.test(textoInput))||
        (/[A-Z]/.test(textoInput))){
        alert("Escribe solo con letras minúsculas");    
        validar=false;
    }
    else if ((textoInput=="")){   
        validar=false;
    }
    else{
        validar=true;
    }
}

function encriptarTexto(){
    var textoInput = document.getElementById('txt_msj').value;
    seleccionartexto();
    if (validar==true) {
        var textoEncript = textoInput.replace(/a/g, 'ai');
        var textoEncript = textoEncript.replace(/e/g, 'enter');
        var textoEncript = textoEncript.replace(/i/g, 'imes');
        var textoEncript = textoEncript.replace(/o/g, 'ober');
        var textoEncript = textoEncript.replace(/u/g, 'ufat');

        document.getElementById('txt_cop').value = textoEncript;
        document.getElementById('txt_msj').value = '';
    }
}

function desencriptarTexto() {
    var textoInput = document.getElementById('txt_msj').value;
    seleccionartexto();
    if (validar==true){
        var textoDecript = textoInput.replace(/ai/g, 'a');
        var textoDecript = textoDecript.replace(/enter/g, 'e');
        var textoDecript = textoDecript.replace(/imes/g, 'i');
        var textoDecript = textoDecript.replace(/ober/g, 'o');
        var textoDecript = textoDecript.replace(/ufat/g, 'u');
    
        document.getElementById("txt_cop").value = textoDecript;
        document.getElementById("txt_msj").value = '';
    }
}

function copiar() {
    var textoCopiado = document.getElementById("txt_cop");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    
}
  
function evitarRecarga(event){  
    event.preventDefault();
    return false;
}

btn_encript.addEventListener('click', encriptarTexto);
btn_decript.addEventListener('click', desencriptarTexto);
btn_copiar.addEventListener('click', copiar);