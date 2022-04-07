
let nuberCards=4;

while(nuberCards<4 || nuberCards>14 || nuberCards==undefined || (nuberCards%2)!==0)
{
nuberCards= Number(prompt("Com quantas cartas vc quer jogar?"));
}


let element = document.querySelector(".front");


let cads = document.querySelector(".cards")



let back = document.querySelectorAll("img")



for(let i=1; i<nuberCards; i++){

 
    cads.innerHTML+= element.outerHTML;
}

cads.innerHTML+= back[5].outerHTML;


console.log(cads)


let element1 = document.querySelectorAll(".front");

console.log(element1)
console.log(element1[3].outerHTML)
element1[3].classList.add("teste");



let aleatorio = [1,2,3,4]



function apagarItem(element){


for(let i=0; i<4; i++)

  element1[1].innerHTML=back[aleatorio[i]].outerHTML

}






