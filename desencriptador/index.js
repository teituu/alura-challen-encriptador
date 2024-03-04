function encriptar() {
    let texto = document.getElementById("texto").value;
    let muneco = document.getElementById("muneco");
    let botonCopiar = document.getElementById("boton-copiar");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        muneco.src = "./imagenes/encriptado.jpg";
        botonCopiar.disabled = true;
        setTimeout(function() {
            location.reload();
        }, 100000);
    } else {
        muneco.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let muneco = document.getElementById("muneco");
    let botonCopiar = document.getElementById("boton-copiar");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        muneco.src = "./imagenes/desencriptado.jpg";
        botonCopiar.disabled = false;
    } else {
        muneco.src = "./imagenes/muñeco.png";
        alert("Debes ingresar un texto");
    }
}

function copiar() {
    var texto = document.getElementById("texto");
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}
