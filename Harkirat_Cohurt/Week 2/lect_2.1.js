/*console.log("hello there");
function onDone(){
    console.log("I am Done")
};
setTimeout(onDone,10000);
console.log("i am back");*/

//create own sync function

function myOwnsetTimeout(fn,duration){
    setTimeout(fn,duration);
}

myOwnsetTimeout(function() {
    console.log("YO BRO");
},10000)
