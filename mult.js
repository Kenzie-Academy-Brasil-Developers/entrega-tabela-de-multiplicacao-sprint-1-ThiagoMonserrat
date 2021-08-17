function mult(){
    let tabuada = []
    let multiplicacao = 0
    for(let i = 1; i <=10; i++){
        tabuada[i] = [i]
        for(let j = 1; j<= 10; j++){
            multiplicacao = j * i
        tabuada[i][j] = multiplicacao
        }
    }
    console.table(tabuada)
}
