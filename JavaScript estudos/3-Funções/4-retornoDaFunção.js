function speedUp(velocity, acceleration) {
    let newVelocity = (velocity + acceleration)
    console.log("Nova velocidade: " + newVelocity)
    return newVelocity
}

//    let velocity = 80
//    let acceleration = 5

//    console.log(velocity)

//    velocity = speedUp(velocity, acceleration)

//    console.log(velocity)


//a palavra 'return' tem o propósito de retornar o novo valor da variável depois dela ser processada, no caso a variável newVelocity retorna depois de ter a velocidade base somada ao fator de aceleração, com tal retorno podemos ou não utiliza-lo em novas operações futuras
//Como exibido no exemplo o primeiro console.log exibe a velocidade base sendo 80, vem a chamada da função somando as variaveis de velocidade e de aceleração, depois outro console.log exibindo a nova velocidade da variável
//As 3 linhas dcima descritas podem ser substituídas por :

speedUp(90, 10)