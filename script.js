



function tabuada(){
let numInicial = Number(document.getElementById('numInicial').value)

let numFinal = Number(document.getElementById('numFinal').value)

let operadores = document.getElementsByName('operador')

let res = document.getElementById('resultado')



if (operadores[0].checked){
 for (let cont= 0;cont <= numFinal;cont++ ){
  
 let contasoma = numInicial + cont
 
  res.innerHTML += numInicial+ '+'+ cont + '='+ contasoma +'<br>'
 }
}
else if (operadores[1].checked){
  for (let cont = 0 ; cont <= numFinal  ; cont=cont+1){
    let contasub = (numInicial -cont)
    res.innerHTML += numInicial+ '-'+ cont + '='+ contasub+'<br>'
  }
}
else if (operadores[2].checked){
  for (let cont = 0 ; cont <= numFinal  ; cont=cont+1){
    let contasub = (numInicial *cont)
    res.innerHTML += numInicial+ 'x'+ cont + '='+ contasub+'<br>'
  }
}
else if (operadores[3].checked){
  for (let cont = 1 ; cont <= numFinal  ; cont=cont+1){
    let contasub = (numInicial /cont).toFixed(2)
    res.innerHTML += numInicial+ '÷'+ cont + '='+ contasub+'<br>'
  }
}
}


function resetar(){
  let res = document.getElementById('resultado')
 res.innerHTML = ''
}