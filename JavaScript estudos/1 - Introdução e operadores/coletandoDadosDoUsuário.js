alert("Olá usuário, seja vem vindo ! A seguir pediremos alguns dados.")
let nome = prompt("Informe seu nome por gentileza:")
let idade = prompt("Informe sua idade por gentileza:")
let age = confirm ("Voce tem " + idade + " anos ?")

console.log(nome)
console.log(idade)
console.log(age)

alert("Seu nome é " + nome + "\nVoce tem " + idade + " anos" + "\nIdade confirmada: " + age)

//como escrito no código acima, as tres variáveis declaradas recebem o resultado de prompt e confirm, sendo impressas na tela posteriormente
// novidade que a quebra de linha em JS usando "\n" que na leitura do script é interpretado como um único caractere, dessa forma consigo exibir as tres variaveis em 3 linhas distintas no mesmo alerta.