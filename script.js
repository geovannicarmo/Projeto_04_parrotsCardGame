
let nuberCards;

while(nuberCards<4 || nuberCards>14 || nuberCards==undefined || (nuberCards%2)!==0)
{
nuberCards= Number(prompt("Com quantas cartas vc quer jogar?(numeros pares de 4 a 14)"));
}


let minhaArray = [0,1,2,3,4,5,6]
let definepares=[]

minhaArray.sort(comparador); 
function comparador() { 
	return Math.random() - 0.5; 
}


for(let index=0;index <nuberCards/2;index++)
{
  definepares.push(minhaArray[index])
  definepares.push(minhaArray[index])
}

console.log(definepares)
definepares.sort(comparador); 
console.log(definepares)



let element = document.querySelector(".card");

let cads = document.querySelector(".cards")

let back = document.querySelectorAll("img")


for(let i=1; i<nuberCards; i++){

 
  cads.innerHTML+= element.outerHTML;
}


let element1 = document.querySelectorAll(".card");


for(let i= 0; i<nuberCards; i++){


 element1[i].querySelector(".back-face").innerHTML=back[definepares[i]].outerHTML
 

}

let b=0
let c=0
let b1=0
let c1=0

let contador=0;
let contadorAcertos=0

function virarcarta(elementclicked){

  
  contador++
  console.log(contador)

 let antesdeVirar=elementclicked.outerHTML

 console.log(antesdeVirar)


  
  elementclicked.innerHTML=elementclicked.querySelector(".back-face").innerHTML

  

  let a1=antesdeVirar

  let a=elementclicked
  let ainner=elementclicked.innerHTML


 if(b===0){
   binner=ainner
  
  b=a
   b1=a1
 }

 else{
   c=a
   c1=a1
 
 if (binner==ainner){
  console.log("iguais")
  b=0; c=0;
  contadorAcertos++
  if(contadorAcertos===nuberCards/2){

    clearInterval(idInterval);

    alert(`Você ganhou em ${contador} jogadas e em ${tempo} segundos`)

    let novoJogo=0;

    while(novoJogo!=="sim" && novoJogo!=="não"){
      novoJogo=prompt(`Deseja jogar novamente?(responda sim ou não)`)
    }

    if(novoJogo==="sim"){
    location.reload();}
   
  }
  
}
else{
  bt=b; ct=c 
    console.log("diferentes")

      
      setTimeout(desvirarcarta, 1000);
    }

      function desvirarcarta(){
        bt.outerHTML=b1
        ct.outerHTML=a1
      
    
        b=0; c=0;
  }}}

  let tempo=0
  let idInterval = setInterval(minhaFuncao, 1000);
  
  

function minhaFuncao () {
  
  tempo++

  document.querySelector("h2").innerHTML=tempo
  
}