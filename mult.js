function mult(){
    let tabuada = []
    let multiplicacao = 0
    for(let i = 0; i <=10; i++){
        tabuada[i] = [i]
        for(let j = 0; j<= 10; j++){
            multiplicacao = j * i
        tabuada[i][j] = multiplicacao
        }
    }
    console.table(tabuada)
}
