let textoInput = document.getElementById('txt_input');
let textoCopiado = document.getElementById('txt_cop');
let spanWarning = document.querySelector('.span_txt');
let spanCopiado = document.querySelector('.span_copiado');
let textoEncript;
let textoDecript;
let verificador = false;

let btn_encript = document.querySelector('.btn_encrip');
let btn_decript = document.querySelector('.btn_descrip');
let btn_copiar = document.querySelector('.btn_cop');

//EVENTOS BOTONES

btn_encript.addEventListener('click', encriptador);

btn_decript.addEventListener('click', decriptador);

btn_copiar.addEventListener('click', copiarTexto);

//FUNCION VALIDAR CARACTERES

function validarInput(){
    caracteres = document.getElementById('txt_input').value;
    if (/[A-Z]/.test(caracteres) || (/[0-9]/.test(caracteres)) || (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(caracteres))) {
        verificador = false;
        spanWarning.textContent = 'Solo letras minúsculas sin signos!';
    } else if (caracteres == '') {
        verificador = false; 
        spanWarning.textContent = 'Escriba un mensaje!';
    } else {
        verificador = true;
    }
}

//FUNCION ENCRIPTAR MENSAJE

function encriptador(){
    validarInput();
    caracteres = textoInput.value;
    if (verificador == true) {
        textoEncript = caracteres.replaceAll('e', 'enter')
                                 .replaceAll('i', 'imes')
                                 .replaceAll('a', 'ai')
                                 .replaceAll('o', 'ober')
                                 .replaceAll('u', 'ufat');
        textoCopiado.value = textoEncript;
        textoInput.value = '';
        spanWarning.textContent = 'Mensaje Encriptado!';
    }
}

//FUNCION DESENCRIPTAR MENSAJE

function decriptador(){
    validarInput();
    caracteres = textoInput.value;
    if (verificador == true) {
        textoDecript = caracteres.replaceAll('enter', 'e')
                                 .replaceAll('imes', 'i')
                                 .replaceAll('ai', 'a')
                                 .replaceAll('ober', 'o')
                                 .replaceAll('ufat', 'u');
        textoCopiado.value = textoDecript;
        textoInput.value = '';
        spanWarning.textContent = 'Mensaje Desencriptado!';
    }
}

//FUNCION COPIAR

function copiarTexto(){
    textoCopiado = document.getElementById('txt_cop');
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    spanCopiado.textContent = 'Mensaje Copiado!';
}

