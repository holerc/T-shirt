// // // // // // // // Conditional Statement

// // // // // // // if (true){
// // // // // // //   console.log("This is true");
// // // // // // // }else if(true){
// // // // // // //   console.log("Second true");
// // // // // // // }else{
// // // // // // //   console.log("This is false");
// // // // // // // }


// // // // // // // // &&
// // // // // // // const isFreeTime = true;
// // // // // // // const hasMoney = true;
// // // // // // // if(isFreeTime && hasMoney){
// // // // // // //   console.log("Traveling");
// // // // // // // }else{
// // // // // // //   console.log("Stay Home")
// // // // // // // }


// // // // // // // // Truthy and Falsy
// // // // // // // const txt =23;
// // // // // // // if(txt){
// // // // // // //   console.log("True")
// // // // // // // }else{
// // // // // // //   console.log("Falsy")
// // // // // // // }



// // // // // // // // Switch
// // // // // // // const enrollment = 23;
// // // // // // // switch(enrollment){
// // // // // // //   case 1:
// // // // // // //     console.log("One enrollment");
// // // // // // //     break;
// // // // // // //   case 2:
// // // // // // //     console.log("Two Enrollment")
// // // // // // //     break;
// // // // // // //     default:
// // // // // // //       console.log("No Enrollment")
// // // // // // // }
 
// // // // // // // // While
// // // // // // // let n = 0;
// // // // // // // while(n>10){
// // // // // // //   console.log("Running")
// // // // // // //   n ++;
// // // // // // // }


// // // // // // // // do while loop
// // // // // // // let i =0;
// // // // // // // do{
// // // // // // //   console.log(n);
// // // // // // //   n ++;
// // // // // // // }while(i<10);


// // // // // // // for (let i=10;i>=0;i--){
// // // // // // //   console.log(i)
// // // // // // // }

// // // // // // // const names = ["Sok", "Meng"];
// // // // // // // for(let i=0;i<names.length;i++){
// // // // // // //   console.log(names[i])
// // // // // // // }

// // // // // // const students = [
// // // // // //   {
// // // // // //     name: "Richhat",
// // // // // //     age:19,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Richhat",
// // // // // //     age:19,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Richhat",
// // // // // //     age:19,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Richhat",
// // // // // //     age:19,
// // // // // //   },
// // // // // // ];


// // // // // // let i=0;
// // // // // // while(i<students.length){
// // // // // //   console.log(`Student: ${students[i].name} has ${students[i].age} age.`)
// // // // // //   i++;
// // // // // // }


// // // // // // String Porps and Methods

// // // // // // const txt = "    Ri chard";

// // // // // // if(txt.toLocaleLowerCase().includes("ri")){
// // // // // //   console.log("It true")
// // // // // // }


// // // // // let x = 5;
// // // // // let y = 10;

// // // // // let total = x + y;

// // // // // console.log(total)

// // // // // let name = "JJ"
// // // // // console.log("Hello "+ name + "!");

// // // // // let Name = "Richhat";
// // // // // console.log(`Hello ${Name}!`);


// // // // let name = "Lina";
// // // // let age = 20;
// // // // let city = "Phnom Penh";

// // // // console.log(`My name ${name}, i am ${age}year old, and i am from ${city}`);





// // // // let age = 18;
// // // // if(age >=18 ){
// // // //   console.log("You are man ");
// // // // }else{
// // // //   console.log("You are boy");
// // // // }

// // // // let score = 75;

// // // // if(score >=90){
// // // //   console.log("A");
// // // // }else if(score >=80)
// // // // {
// // // //   console.log("B");
// // // // }else if(score>=70){
// // // //   console.log("C");
// // // // }else if(score>=60){
// // // //   console.log("D");
// // // // }else if(score>=50){
// // // //   console.log("E")
// // // // }else{
// // // //   console.log("F");
// // // // }


// // // // function sayHello(){
// // // //   console.log("Hello bro");
// // // // }

// // // // sayHello();

// // // // function greet(name){
// // // //   console.log(`Hell ${name}!`);
// // // // }

// // // // greet("JJ");
// // // // greet("Chan Eng");


// // // // function add(x,y){
// // // //   return x+y;
// // // // }
// // // // let result = add(5,5);
// // // // console.log("Result = ",result);


// // // // function checkAge(age){
// // // //   if(age>=18){
// // // //     console.log("You are men");
// // // //   }else{
// // // //     console.log("You are boy");
// // // //   }
  
// // // // }

// // // // checkAge(18);
// // // // checkAge(15);


// // // // const add = (a,b) => {
// // // //   return a+b;
// // // // };
// // // // console.log(add(2,3));


// // // function greet(name){
// // //   console.log(`Hello ${name}, Welcome!`);
// // // }
// // // greet("Richard");


// // // function calculateTotal (price, qty){
// // //  return  price * qty;
// // // }

// // // console.log(calculateTotal(2,3));


// // // let fruit = ["Banana", "Apple"];

// // // // push() //បន្ថែមធាតុ ឬតម្លៃនៅខាងចុងក្រោយ
// // // // Pop()​ // លុបធាតុនៅក្រោយ ឬ នៅចុងក្រោយ
// // // // unshift()​​ // បន្លែមធាតុនៅខាងដើម
// // // // shift() // លុបធាតុនៅខាងដើម

// // // fruit.push("meymey");
// // // fruit.unshift("Kaka");
// // // fruit.pop();
// // // fruit.shift();
// // // console.log(fruit)


// // let person = ["richard","Mey","Lyly"];

// // for(let i=0;i<person.length;i++){
// //   console.log(person[i]);
// // }

// let info = ['JJ',20,true];
// console.log(info[0]);
// console.log(info[1]);
// console.log(info[2]);

let animal = ["dog","cat","bird"];

animal.push("fish");

let index = animal.indexOf("cat");
if(index != -1){
  animal.splice(index,1);
}
for(let i=0;i<=animal.length;i++){console.log(animal[i]);}

