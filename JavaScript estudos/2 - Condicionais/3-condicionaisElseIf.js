let velocity = 80

if(velocity < 40 ) {
    console.log("Velocidade baixa")
} else if (velocity <= 100) {
    console.log("Cuidado! Próximo a velocidade de risco")
} else {
    console.log("Velocidade de risco !")
}

/* "if" é um controlador de fluxo, que realiza uma ação sobre outra de acordo com o resultado da operação lógica determinada nele
"else" é o blcoo de código a ser executado caso o retorno da operação lógica realizada por "if" seja falsa.
podemos encadear os blocos de códigos para mais opções de execução como demonstrado acima utilizando "else if" */