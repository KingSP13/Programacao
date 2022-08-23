let piloto = prompt("Olá piloto, informe seu nome por gentileza:")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de viajar ?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/h !")

if(confirmVelocity) {
    velocity = newVelocity
} else {
    alert("Sua velocidade constante é de " + velocity + "!")
}

if(velocity<=0) {
    alert("Nave parada. Considere partir para uma nova jornada")
} else if (velocity<40) {
    alert("Podemos aumentar a velocidade, tempo estimado de chegada estimado: alto")
} else if (velocity<80) {
    alert("Tempo estimado de chegada: ideal.")
} else {
    alert("Risco de colisão e desintegração da nave!!!")
}

alert("Jornada iniciada.\n" + "Piloto " + piloto + "\nViajando a " + velocity + "Km/h")

console.log(velocity)