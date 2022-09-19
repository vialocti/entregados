export const generadordeNumerosalazarBetween = (min,max,excluded)=>{
    let minimo = Math.ceil(min)
    let maximo = Math.floor(max)
    
    
    let numberGenerado = Math.floor(Math.random() * (maximo-minimo) +1);
    
    if(numberGenerado===excluded){
        generadordeNumerosalazarBetween(min,max,excluded)
    }else{
        return numberGenerado
    }

}