function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(8))
/* Quando nao passado parâmetro nenhum o simbolo de igualdade, no caso de atribuir, define um valor default pra variavel, caso a função executada com apenas um parâmetro sem o valor padrão pra variavel, a função daria erro por somar um valor 'number' a 'undefined'*/