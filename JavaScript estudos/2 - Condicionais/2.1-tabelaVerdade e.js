// TABELA VERDADE DO 'E', expressões lógicas.

let spaceship = 'Elemental'
let velocity = 20


// representado pelo operador &&.

//console.log(spaceship.length == 9 && velocity >15) = true. V e V = V

//spaceship.length == 9 verifica o numero de caracteres da palavra atribuída a variavel, no caso 9 caracterese o simbolo de igualdade. Assim como velocity maior que 15.

//console.log(velocity > 10 && velocity < 19) = false. V e F = F

//falha em velocity menor que 19, mesmo que a primeira operação retorne verdadeiro, o sinal de && precisa de concordancia de ambos os lados para retorno verdadeiro

//console.log(velocity <17 && spaceship == 'Elemental') == false. F e V = F
 //falha na primeira operação, mesmo motivo mencionado no ex. anterior

 //console.log(spaceship == 'Golias && velocity > 21) == false. F e F = F
 //Falha nas duas operações, spaceship recebe outra string e velocity com valor maior que 20.