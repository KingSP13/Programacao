let spaceship  = "Golias"
let velocity = 80 

console.log(velocity == 90) //false
console.log(velocity == "Golias") //false
console.log(velocity == "80") //true
console.log(velocity === "80")//false, numérico 80 contra string 80
console.log(velocity != 80)//false, sinal de diferenã
console.log(velocity != 70)//true
console.log(velocity != "80")//false
console.log(velocity !== "80")//true, 80 number da variavel é diferente de 80 de tipo texto
console.log(velocity > 70)//true, 80 maior que 70
console.log(spaceship > "Helmet")//false, o sinal de maior e menor em strings mede em ordem alfabética, sendo assim Golias vem antes de Helmet
console.log(velocity >= 90)//false, maior ou igual
console.log(velocity >= 80)//true, maior ou igual a
console.log(spaceship >= "Golias")//true igualdade de strings
console.log(velocity < 120)//true, 80 numérico da variável é menor que 120 de number da comparação
console.log(spaceship < "Helmet")//true,Golias é alfabeticamente menor que Helmet
console.log(velocity <= 130)//true, auto explicado, menor ou igual para numero
console.log(spaceship <= "Helmet")//true, Golias menor alfabeticamente que a string Helmet
