// // console.log("Hello, World!");

// // var a = 123;
// // console.log(a);

// // function abc() {
// //   console.log("This is function abc");
// //   function hgf() {
// //     var c = 2;
// //     console.log("This is function hgf");
// //   }
// //   hgf();
// // }
// // abc();

// // xyz(); //type error
// // //arrow fxn
// // var xyz = () => {
// //   console.log("This is arrow function xyz");
// // };

// // console.log(b); //value unavailable
// // let b = 300; //reference error - cannot access 'b' before initialization

// // {
// //   //compound statement
// //   //grandparent
// //   var a = 100;
// //   var b = 200;
// //   var c = 300;
// //   console.log(x);
// //   console.log(a, b, c);
// //   {
// //     //parent
// //     console.log(a, b, c);
// //     {
// //       //child
// //       var x = 1000; //undefined
// //       let x = 1000; //reference error
// //       console.log(a, b, c);
// //     }
// //   }
// // }

// // function abc() {
// //   var a = 100;
// //   var b = 200;
// //   var c = 300;
// //   console.log("abc", a, b, c);
// //   function def() {
// //     console.log("def", a, b, c);
// //     function ijk() {
// //       console.log("ijk", a, b, c);
// //     }
// //     ijk();
// //   }
// //   def();
// // }
// // abc();

// // for (var i = 0; i <= 5; i++) {
// //   setTimeout(() => {
// //     console.log("i", i--);
// //   }, 2000);
// // }

// // for (var i = 0; i <= 5; i++) {
// //   function closure(i) {
// //     setTimeout(() => {
// //       console.log("i", i);
// //     }, 2000);
// //   }
// //   closure(i);
// // }

// //HOF
// // function outerFunction(fxn) {
// //   console.log("Outer function");
// //   fxn();
// // }
// // function fxn() {
// //   console.log("fxn function");
// // }
// // outerFunction(fxn);

// // function outerFunction(fxn) {
// //   console.log("Outer function");
// //   return fxn();
// // }
// // function fxn() {
// //   console.log("fxn function");
// // }
// // outerFunction(fxn);

// //------------------------------------------------

// // console.log("Script started");
// // setTimeout(() => {
// //   console.log("Going to res");
// // }, 2000);
// // setTimeout(() => {
// //   console.log("walk inside");
// // }, 4000);
// // setTimeout(() => {
// //   console.log("check menu");
// // }, 3000);
// // console.log("Script ended");

// // function walk(cb) {
// //   console.log("walk inside");
// //   setTimeout(cb, 2000);
// // }
// // function menu(cb) {
// //   console.log("check menu");
// //   setTimeout(cb, 3000);
// // }
// // function pay(cb) {
// //   console.log("pay the bill");
// //   setTimeout(cb, 6000);
// // }
// // function goHome(cb) {
// //   console.log("go home");
// //   setTimeout(cb, 5000);
// // }
// // walk(() => {
// //   menu(() => {
// //     pay(() => {
// //       goHome(() => {
// //         console.log("All done!");
// //       });
// //     });
// //   });
// // });
// // console.log("Script ended");

// // let array = [1, 2, 3, 4, 5];
// // function doubleArray(arr) {
// //   let newArray = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     newArray.push(arr[i] * 2);
// //   }
// //   return newArray;
// // }
// // let array2 = doubleArray(array);
// // console.log(array2);

// // Array.prototype.double = function (data) {
// //   let output = [];
// //   for (let i = 0; i < this.length; i++) {
// //     output.push(this[i] * 2);
// //   }
// //   return output;
// // };
// // let arr = array.double();
// // console.log(arr);

// // Array.prototype.triple = function () {
// //   let output = [];
// //   for (let i = 0; i < this.length; i++) {
// //     output.push(triple(this[i]));
// //   }
// //   return output;
// // };
// // function triple(x) {
// //   return x * 3;
// // }
// // let arr = array.triple();
// // console.log(arr);
// //------------------------------------

// // let cart = ["shoes", "shirt", "wallet"];
// // function orderDetail(cart) {
// //   console.log("Order Details:");
// //   cart.forEach((item, index) => {
// //     console.log(${index + 1}. ${item});
// //   });
// //   console.log("Total items:", cart.length);
// // }
// // function orderSummary() {
// // }
// // function paymentGateway() {}
// // function successfulOrder() {}

// // let array = [1, 2, 3, 4, 5];
// // Array.prototype.filterPrototype = function (logic) {
// //   let output = [];
// //   for (let i = 0; i < this.length; i++) {
// //     if (logic(this[i])) {
// //       output.push(this[i]);
// //     }
// //   }
// //   return output;
// // };
// // let arr = array.filterPrototype((item) => {
// //   return item % 2 === 0; // filter even numbers
// // });

// let arr = [2, 4, 6, 8, 10];
// const sumOfAll = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(sumOfAll);

// Array.prototype.reducePrototype = function (n) {
//   let output = 0;
//   for (let i = 0; i < this.length; i++) {
//     output += this[i];
//   }
//   return output;
// };
// let ans = arr.reducePrototype();
// console.log(ans);


// let userData = [{
//     firstName:"Priyanshu",
//     age:"21"
// },
// {
//      firstName:"Prana",
//     age:"20"
// },
// {
//      firstName:"Divesh",
//     age:"24"
// }]

// //use map and filter to sort this by age and then return using map 
// //chaining uskr ke filter and then return
// //user.age >20 then 

// // const Priyanshupromise = new Promise((resolve,reject)={
// //     setTimeout(()=>{
// //         reject("I did not get placed");
// //     },5000);

// // })    
// // Priyanshupromise
// // .then((res)=>{
// //     console.log(res)
// // })m
// //     //console.log(Priyanshupromise);


// priyanshuPromise
// .then((res)=>{
//     console.log("Priyanshu getting salary 1 cr")
//     console.log(res);
// })
// .then(()=>{
//     console.log("Party Time");
// })
// .then(()=>{
//     console.log("Layoff");
// })
// .catch((err)=>{
//     console.log("ERROR FOUND" , err)
// })

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("assignment completed by abc ");
//     },4000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("assignment completed by abc ");
//     },4000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("assignment completed by abc ");
//     },4000)
// })

// const p4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("assignment completed by abc ");
//     },4000)
// })

// Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log("ERROR",err));


// ASYNC AWAIT 


// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("assignment completed by abc ");
//     },4000)
// })

// function checkAssign(){
//     const dataAssign = p1;
//     console.log("Checking the assign" , dataAssign)
// }

// checkAssign();

async function fetchproduct(){
    try{
    const products = await fetch("https://dummyjson.com/products");
    const data = products.json()
    console.log(data);
    }
    catch(err){
        console.log("ERROR :" , err.messageh)
    }
}
fetchproduct()