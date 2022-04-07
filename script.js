
let nuberCards=8;

while(nuberCards<4 || nuberCards>14 || nuberCards==undefined || (nuberCards%2)!==0)
{
nuberCards= Number(prompt("Com quantas cartas vc quer jogar?"));
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







let b=0
let c=0
let b1=0
let c1=0

function virarcarta(elementclicked){

  console.log(elementclicked)

 let antesdeVirar=elementclicked.outerHTML

 console.log(antesdeVirar)


  
 

  

  let a1=antesdeVirar

  let a=elementclicked.innerHTML


 if(b===0){
   b=a
   b1=a1
 }

 else{
   c=a
   c1=a1
 

 if (b==c){
  console.log("iguais")
  b=0; c=0;
}
else{
  
    console.log("diferentes")

    elementclicked=b1

    b=0; c=0;
    b1=0; c1=0;

  }


}

  
 }





for(let i=1; i<nuberCards; i++){

 
    cads.innerHTML+= element.outerHTML;
}




let element1 = document.querySelectorAll(".card");


for(let i= 0; i<nuberCards; i++){


 element1[i].querySelector(".back-face").innerHTML=back[definepares[i]].outerHTML
 

}









