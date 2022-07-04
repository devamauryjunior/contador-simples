let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
const getButtonStart = document.querySelector('#start');
const getButtonPause = document.querySelector('#pause');
const getButttonReset = document.querySelector('#reset');
const contador = document.querySelector('#contador');

function zeroAEsqueda(value) {
    if(value < 10) {
        return "0"+value;
    } else {
        return value;
    }
}

function start() {
    intervalo = setInterval(addIntervalo, 10);
}

function addIntervalo() {
    segundos++;
    if(segundos == 60) {
        minutos++;
        if(minutos == 60) {
            horas++;
            minutos = 0;
        }
        segundos = 0;
    }
    contador.innerHTML = zeroAEsqueda(horas) + ":" + zeroAEsqueda(minutos) + ":" + segundos;
}

function pause() {
    clearInterval(intervalo);
}

function reset() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    contador.innerHTML = "00:00:00";
}

getButtonStart.addEventListener('click', start);
getButtonPause.addEventListener('click', pause);
getButttonReset.addEventListener('click', reset);