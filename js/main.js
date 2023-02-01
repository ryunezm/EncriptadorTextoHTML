// ¡Bienvenidos y Bienvenidas a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
// El resultado debe ser mostrado en la pantalla.

function vowelsReplacer(vowel){
    if (vowel === "a")
        return "ai";
    else if (vowel === "e")
        return "enter";
    else if (vowel === "i")
        return "imes";
    else if (vowel ==="o")
        return "ober"
    else if (vowel === "u")
        return "ufat";
}

function keySearcher(key){
    if (key === "ai")
        return "a";
    else if (key === "enter")
        return "e";
    else if (key === "imes")
        return "i";
    else if (key === "ober")
        return "o";
    else if (key === "ufat")
        return "u";
}

function copyText(){
    textareaObjResult.select();
    textareaObjResult.setSelectionRange(0,99999999);
    navigator.clipboard.writeText(textareaObjResult.value);
}

function textareaChecker(){
    let textResult = textareaObjResult.value;

    if(textResult.trim()===''){
        btnObjCopy.style.display = "none";        
        row22.style.display = "none";
        row23.style.display = "none";
        
        row21.style.display = "flex";
        setTimeout(() => {
            row21.style.opacity = 1;
        }, 10);
    } else {
        btnObjCopy.style.display = "unset";
        row22.style.display = "flex";
        row23.style.display = "flex";

        row21.style.opacity = 0;
        setTimeout(()=>{
            row21.style.display = "none";
        },1000);
    }        
}

function encryptText(){
    let textResult = textareaObjTarget.value;
    textResult = textResult.replace(/[aeiou]/g,  vowelsReplacer)
    document.getElementById('result').value = textResult;
    textareaChecker();
}

function decryptText(){
    let textResult = textareaObjTarget.value;
    textResult = textResult.replace(/ai|enter|imes|ober|ufat/g, keySearcher)
    document.getElementById('result').value = textResult;
    textareaChecker();
}

function removeUnacceptedChars(){
    let textResult = textareaObjTarget.value;
    textResult = textResult.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textareaObjTarget.value = textResult;
}

function decryptButtonColor(){
    let textTarget = textareaObjTarget.value;
    
    if(textTarget.trim()===''){
        btnObjDecrypt.style.backgroundColor = "var(--primary-color-light-2)";
    } else {
        btnObjDecrypt.style.backgroundColor = "transparent";
    }
}

const textareaObjTarget = document.querySelector("#target");
const textareaObjResult = document.querySelector("#result");
const btnObjEncrypt = document.querySelector("#btn-bttm-11");
const btnObjDecrypt = document.querySelector("#btn-bttm-12");
const btnObjCopy = document.querySelector("#btn-bttm-2");
const row21 = document.querySelector(".row-21") //Warning Message
const row22 = document.querySelector(".row-22")
const row23 = document.querySelector(".row-23")

textareaObjTarget.addEventListener("input", removeUnacceptedChars);
textareaObjTarget.addEventListener("input", decryptButtonColor);
btnObjEncrypt.addEventListener("click", encryptText);
btnObjCopy.addEventListener("click", copyText);
btnObjDecrypt.addEventListener("click", decryptText);