let distance = prompt ("Qual a distância em anos-luz (l.y.) ?")
let convertOpt = prompt ("Para qual distância que gostaria de converter ?" + "\n As opções disponíveis são:" + "\n1 - Parsec(pc)" + "\n2 - Unidade astronômica(AU)" + "\n3 - Quilômetros (km)")

let decDistance
let chosenOpt

switch(convertOpt) {
    case "1":
        decDistance = "Parsec"
        chosenOpt = distance * 0.306601
        break
    case "2":
        decDistance = "Unidade Astronômica"
        chosenOpt = distance * 60241.1
        break
    case "3":
        decDistance = "Quilômetros"
        chosenOpt = distance * 9.5 * Math.pow(10,12)
        break
    default:
        decDistance = "Unidade não identificada"
        chosenOpt = "Conversão fora do escopo"
}

alert("Distância em anos-luz: " + distance + "\n" + decDistance + ": " + chosenOpt)