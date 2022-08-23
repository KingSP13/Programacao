function greetPilot(name, message = "Olá") {
    alert(message + ", " + name)

}

greetPilot()

//enviando a função greetPilot sem parâmetro nenhum o retorno fica exatamente "Olá, 'undefined'", em principios de funções aprendemos que uma variável em branco retorna o valor 'undefined', o mesmo ocorre na função por se tratar de um tipo de variável também.

//outra armadilha de parâmetros é a ordem dos fatores como descrito acima, atenção nisso pois a ordem em que os parâmetros são declarados é a mesma em que o código vai ser executado

function speedUp(velocity, unit = "km/s", acceleration) {
    let newVelocity = (velocity + acceleration)
    alert("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, 20)

//no caso dessa função daria erro 'NaN20' por não conseguir realizar a soma, 'velocity' recebe 50 e 'unit' recebe 20, sendo a variável "newVelocity = (velocity + acceleration)", o programa tenta somar 50 com 'undefined'.
//a solução mais simples pra esse problema é justamente mover o parâmetro 'unit' para o final, assim nao recebe valor diferente na unidade de medida nem sai da ordem nas declarações na chamada da função. Deixando como resultado final:


function speedUp(velocity, acceleration, unit = "km/s") {
    let newVelocity = (velocity + acceleration)
    alert("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, 20)

//A ATRIBUIÇÃO SEMPRE OCORRE NA MESMA ORDEM DA DECLARAÇÃO !