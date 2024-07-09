//Segundo programa de LÓGICA DE PORGRAMACIÓN

let numeroSecreto = 0;//Declaro mi variable numeroSecreto y es de alcance global
let intentos = 0;
let ListaDeNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

//Declaración de función/ hace una acción
//Esta versión de la función es una general que se puede usar para todos los casos
//Asigna a los elementos de HTML un texto determinado 
function asignarTextoElemento(elemento, texto) {
    //El segundo paso es llamar a la función
    let elementoHTML= document. querySelector (elemento);
    elementoHTML. innerHTML =  texto;
}



//Al oprimir el boton de intentar se ejecuta lo que indica la función
function VerificarIntento(){ 
let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
//Puede hacer más de un input (recuadro blanco donde ingresamos el número) por lo que le vamos a asignar un id
console.log(intentos);
if (numeroDeUsuario === numeroSecreto){
    //Ahora estamos llamando una función dentro de otra función y eso esta potente
    //Vamos a utilizar el operador ternario
    asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento ('p','El número secreto es menor');
    }else{
        asignarTextoElemento ('p','El número secreto es mayor');
    }
    //Estoy contanto el número de intentos
    intentos++; 
    limpiarCaja();
}
return;
}

//Esta función limpia el recuadro donde ingresamos el número para hacer el proceso más dinámico y fluido
function limpiarCaja(){
    let ValorCaja = document.querySelector('#ValorUsuario');
    //Estamos vaciando la caja
    ValorCaja.value ='';
    //Ahora toca llamar a la función cuando no se acierta
}


//Se genera el número aleatorio para el juego y hace que no se repita el número aleatorio en cada jugada
function generarNumeroSecrerto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;//recuerda hacer camell case

    console.log(numeroGenerado);
    console.log(ListaDeNumerosSorteados);
    //si ya sorteamos todos los números
    if (ListaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los posibles números');
    } else{
        //Si el número generado está en la lista, generas un número aleatorio nuevo
        if(ListaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecrerto();
        } else{
            //Si no esta en la lista los incluyes en la lista y lo mandas como aleatorio
            ListaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function MensajesyCondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecrerto();
    intentos = 1;
}


function ReiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    MensajesyCondicionesIniciales();
    //Dasabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

MensajesyCondicionesIniciales();
