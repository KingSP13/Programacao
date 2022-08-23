alert("Olá, bem vindo a pesquisa de idade do igão, irei solicitar alguns dados a seguir.")

var pers1 = prompt("Insira o nome da pessoa mais velha da sua casa:")
var age1 = prompt ("Insira a idade da pessoa mais velha da sua casa:")
var pers2 = prompt("Insira o nome da pessoa mais nova da sua casa:")
var age2 = prompt ("Insira a idade da pessoa mais nova da sua casa:")

function persons (pers1, pers2) {
    let ageDif = (age1 - age2)
    alert("A Diferença de idade é de: " + ageDif)
}
persons (age1, age2)