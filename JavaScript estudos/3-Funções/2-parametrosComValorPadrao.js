function greetPilot(name, message = "Olá") {
    alert(message + ", " + name)

}

greetPilot("John Mars", "Seja bem-vindo")

//na declaração da função, pode ser estabelecido um valor padão caso o parâmetro não seja enviado, como se encontra o "Olá", recebido pelo perâmetro "message", estabelecido o parâmetro "Seja bem-vindo" na chamada da função, ele então substitui o "Olá" recebido previamente
//lembrando que a ordem da chamada é [message + name], que é a ordem em que a função vai ser executada. 