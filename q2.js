var x=299;
function sum(){
   console.log("Global value of x is :"+ x);
   diff();
}
function diff(){
    x=89;
console.log("Local value of x: "+x);
}
console.log(x++);
sum();
