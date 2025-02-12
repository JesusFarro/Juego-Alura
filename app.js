let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];

function asignarTexto (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valor').value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario < numeroSecreto){
            asignarTexto('p','El número secreto es mayor');
        }else{
            asignarTexto('p','El número secreto es menor');
        }
        intentos++;
    }
    return;
}
function numeroRandom (){
    let numeroCandidato = Math.floor(Math.random()*10)+1;
    // recursividad
    if (listaNumeros.includes(numeroCandidato)) {
        return numeroRandom();
    } else {
        listaNumeros.push(numeroCandidato);
        return numeroCandidato;
    }
}
function condicionesIniciales(){
    //mensajes iniciales
    asignarTexto('h1','Juego del número secreto');
    asignarTexto('p','Indica un número del 1 al 10');
    //nuevo número aleatorio
    numeroSecreto = numeroRandom();
    //inicializar el número de intentos
    intentos = 1;
}
function limpiarCaja (){
    document.querySelector('#valor').value = '';
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //condiciones iniciales
    condicionesIniciales();
    //dejar deshabilitado el botón del juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
