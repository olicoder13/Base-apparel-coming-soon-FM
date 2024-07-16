//variables
const email = document.querySelector('.form input');
const btnEnviar = document.querySelector('.btn-subtmit');
const imgError = document.querySelector('.icon-error');

const validador = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//fucciones

document.addEventListener('DOMContentLoaded', validarForm);

function validarForm(){
    btnEnviar.addEventListener('click', ()=>{
        if(validador.test(email.value)){
            email.style.border = '2px solid #8FED4F';
            return;
        }
        //darle borde de error
        email.style.border = '2px solid hsl(0, 93%, 68%)';
        //activar el icono de error
        imgError.classList.add('active');

        //construyendo el mensaje de error
        const mensajeError = document.createElement('div');
        mensajeError.textContent = 'Please provide a valid email';
        mensajeError.classList.add('mensaje-error');
        //agregando al html
        document.querySelector('.form').insertBefore(mensajeError, btnEnviar)

        setTimeout(() => {
            email.style.border = '1px solid hsl(0, 36%, 70%)';
            mensajeError.remove();
            imgError.classList.remove('active');
        }, 3000);
    })
}