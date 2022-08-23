let velocity = 80

//switch serve como um controlador de fluxo, porém aceita mais que valores booleanos ao contrario do 'else/if' e 'while', até expressôes algébricas como exemplificado abaixo

switch(velocity * 2) {
    case 100:
        console.log("Sua velocidade é 100Km/s")
        break
    case 160:
        console.log("Sua velocidade é de 160Km/s")
        break
    default:
        console.log("Sua velocidade nao foi identificada.")
} 

// O mesmo se aplica a 'strings'.

let spaceship = 'Elemental'
switch(spaceship) {
    case "Golias":
        console.log("Nave mais resistente")
    case "Elemental":
        console.log("Nave com melhor armamento")
    case "Helmet":
        break
        console.log("Rápida ativação de escudo")
    case "Frontier":
        console.log("Nave de Infantaria")
    case "Enterprise":
        console.log("Nave frota estelar")
    default:
        console.log("Não conheço esta nave")
}

/* Como escrito no código acima, a forma de construção de um switch se da por um switch(param) {} case "switchCase": ~bloco de código~ 'break'.
o código começa a ser processado no momento que encontra um caso válido e segue sendo executado até encontrar o comando 'break', podendo processar todo um intervalo de mais de um case se desejado.
obs.1: quando o switch inicia sua execução, ele nao executa apenas o bloco que encontra retorno verdadeiro para o parâmetro passado, é executado até o comando 'break' mais próximo !
obs.2: é ideal para lidar com exceções, definindo um valor para o comando 'default' ele será executado caso nenhum case seja atendido.*/