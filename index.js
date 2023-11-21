function calculateRank(victories, defeats){
    var balanceRanked = victories - defeats
    var result

    if (victories < 10) {
        result = "Ferro"
    } else if (victories >= 10 && victories <= 20){
        result = "Bronze"
    } else if (victories >= 20 && victories <= 50){
        result = "Prata"
    } else if (victories >= 50 && victories <= 80){
        result = "Ouro"
    } else if (victories >= 80 && victories <= 90){
        result = "Diamante"
    } else if (victories >= 90 && victories <= 100){
        result = "Lendário"
    } else {
        result = "Imortal"
    } 

    console.log(`O Herói tem um saldo de ${balanceRanked} vitórias e está no nível de ${result}.`);
    return result;
}

var victories = 95
var defeats = 20

var finalResult = calculateRank(victories, defeats)
console.log("Resultado das Ranqueadas: " + finalResult)

