function gerarAleatorios(){
    var vetor = []
    
    while(vetor.length < 6){
        var aleatorio = Math.floor(Math.random()*60 + 1)
    
        if(vetor.includes(aleatorio)){
            continue
        }{
            vetor.push(aleatorio)
        }
    }
    return vetor    
}
