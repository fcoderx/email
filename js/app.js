// Variables 
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');
const form = document.getElementById('enviar-mail');

eventListener();

// Event listener
function eventListener() { 
    // Inicio de la app y deshabilitar el submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Botón enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);

    // Resetear formulario
    resetBtn.addEventListener('click', resetearForm);
}


/*************************** Funciones ********************************/
function inicioApp() {
    // Deshabilitar botón enviar
    btnEnviar.disabled = true;
} 

// Valida que el campo tenga algo escrito
function validarCampo() {

    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this); 

    // Validar solo email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

// Resetear el formulario completo antes de eviar
function resetearForm(e) {
    form.reset();

    inicioApp();

    e.preventDefault();
}

function enviarEmail(e) {
    // Mostrar spinner al presionar enviar
    const spinnerGit = document.getElementById('spinner');
    spinnerGit.style.display = 'block';

    // Git que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar spinner y mostrar git de mail enviado
    setTimeout(() => {
        spinnerGit.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(() => {
            enviado.style.display = 'none';

            form.reset();
            
            inicioApp();
        }, 3000);

    }, 3000);

    e.preventDefault();
}

// Verifica la longitud de los campos
function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// Valida que el campo email tenga un @
function validarEmail(campo) {
    const mensaje = campo.value;

    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else { 
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
} 
