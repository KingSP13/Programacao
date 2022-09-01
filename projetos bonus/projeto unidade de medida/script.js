let distance = prompt ("Qual a distância em anos-luz (l.y.) ?") //variavel que vai receber a distancia declarada pelo usuário no prompt
let convertOpt = prompt ("Para qual distância que gostaria de converter ?" + "\n As opções disponíveis são:" + "\n1 - Parsec(pc)" + "\n2 - Unidade astronômica(AU)" + "\n3 - Quilômetros (km)") //variavel que vai receber a opção de conversao que o usuario selecionar

let convDistance //declarada variável sem valor definido para ser chamada depois no switch, responsável por trazer o valor convertido.
let chosenOpt //variavel previamente declarada e vazia para ser utilizada posteriormente trazendo a opção que o usuário selecionou.

switch(convertOpt) {
    case "1":
        convDistance = "Parsec"
        chosenOpt = distance * 0.306601
        break
    case "2":
        convDistance = "Unidade Astronômica"
        chosenOpt = distance * 60241.1
        break
    case "3":
        convDistance = "Quilômetros"
        chosenOpt = distance * 9.5 * Math.pow(10,12)
        break
    default:
        convDistance = "Unidade não identificada"
        chosenOpt = "Conversão fora do escopo"
}

alert("Distância em anos-luz: " + distance + "\n" + convDistance + ": " + chosenOpt)