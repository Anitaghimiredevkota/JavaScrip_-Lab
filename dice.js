function rollDie(dieId){
    //step 1:find for the element
    var numSidesEl=document.getElementById("numSides")
    //step 2:modify the elemnent
    var numSides= numSidesEl.value;
  
var num=Math.floor(Math.random()*numSides)+ 1;
console.log(num);

//step1 :Get the Element
var die1=document.getElementById(dieId);
//step 2:modify the element
die1.innerText = num;
}
function rollDice(){
rollDie("die1");
rollDie("die2");
}
rollDice();
