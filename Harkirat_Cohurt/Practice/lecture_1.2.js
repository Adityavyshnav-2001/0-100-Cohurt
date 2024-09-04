var a=1;
console.log(a);

let firstname="Adityavyshnav";
let Age=22;
let isMarried =false;

console.log("the name is "+firstname +" and his age is "+ Age)

if(isMarried==false)
console.log(firstname + " is Not Married")
else
console.log(firstname+" is married")

let answer=0;
for(let i=0;i<=100;i++){
    answer=answer+i;
}
console.log(answer);

const ages=[24,26,22,21,20];

for(let i=0;i<5;i++){
if(ages[i]%2==0){
    console.log(ages[i] + " is even ")
}
}

let bignum=0;
for(let i =0;i<ages.length ; i++){
    if(ages[i]>bignum){
        bignum=ages[i];
    }
}
console.log(bignum + " is the biggest number ")

//object creation 
const user2=[{
    firstName:"Ramesh",
    age:50
},
{
    firstName:"Suresh",
    age:47
}
]

for(let i=0;i<user2.length;i++){
    if(user2[i]["age"]<48){
console.log(user2[i]["firstName"])
}
}

