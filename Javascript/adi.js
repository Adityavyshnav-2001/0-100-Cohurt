
const myuser={
    name: " Adityavyshnav",
    email: "adityavyshnav@gmail.com",
    age:18,
}

myuser.feelings=function(){
    console.log(`Hello dear ${this.name}`);
}
console.log(myuser.feelings());

