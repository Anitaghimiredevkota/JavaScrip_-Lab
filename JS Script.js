console.log("Welcome!!");
function getName(word){
    var name=prompt("Enter your name");
    if(name.length < 2){
      alert("Error A name must be greater than 2 characters");
      return getName();
    }
   
else{
    alert(" Hello " + name);
}
       
}
getName();



