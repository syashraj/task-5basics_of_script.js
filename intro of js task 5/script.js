//javascript function
function demo1(   ) {
    console.log("hello demo 1");
}
let result=demo1(    )
console.log("hello World");

//parameters
function addition (num1,num2){
   return num1+num2;
}
let result1=addition(10,10);//arguments
console.log(result1)

//division
function divi(num1,num2){
    return num1/num2
}
let result2=divi(10,5);
console.log(result2)

//multiplication
function multi(num1,num2,num3){
    return num1*num2*num3;
}
let result3=multi(10,5,2);
console.log(result3)

//fahrenheit to celsius
function celsius(fahrenheit){
    return(5/9)*(fahrenheit-32);
}
let result4=celsius(50)
console.log(result4);

//strings
let firstname="yash"
let secondname="raj"
console.log(firstname+" "+secondname);

//slice 
console.log(firstname.slice(0,3));

//startswith
console.log(firstname.startsWith('y'));

//endswith
console.log(secondname.endsWith('j'));

let name="my name is yash"
let fullname=name.replace("yash","yash raj");
console.log(fullname);

//array
let fruits=["apple","banana","orange"];
console.log(fruits);

//second fruit name
console.log(fruits[2]);

//changing 1st fruit name
fruits[0]="mango";
console.log(fruits[0]);
console.log(fruits);

//pop :-removes last fruit name
fruits.pop()
console.log(fruits);

//push :- add name in a array
fruits.push("graphs");
console.log(fruits);

//const  
const vehicle={
    car: "bmw" ,
    type: "petrol",
    color: "red"
}
console.log(vehicle.car);
console.log(vehicle.type);