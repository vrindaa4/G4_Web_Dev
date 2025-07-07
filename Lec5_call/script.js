// // function welcomeStudents(welcomeMessage, goodbyeMsg){
// // //console.log(this.studentName + " is a student of" + studentClass);

// // // console.log(welcomeMessage + " " + this.studentName + " is a student of" + studentClass + " " + goodbyeMsg)

// // return '${} '
// // }

// // const student1 = {
// //     studentName : "Paras",
// //     studentClass: "G4"
// // }


// // const student2 = {
// //     studentName : "Divesh",
// //     studentClass: "G6"
// // }

// // //call 


// // // welcomeStudents.call(student1 , "Good morning" , "Bye");

// // // welcomeStudents.call(student2 , " good eve" , " goodbye");

// // // call ka prototype ? kaise banate h 


// // //bind

// // //bind pr nhi chla but call pr chla why 

// // welcomeStudents.call(student1 , "Good morning" , "Bye");

// // welcomeStudents.call(student2 , " good eve" , " goodbye");
// // //bind immediately call nhi hota h we jhave to store it somewhere 


// // // to fix this we ll store it somewhwere and make a call to it

// // const s1 = welcomeStudents.bind(student1 , "Good morning" , "Bye");

// // const s2 = welcomeStudents.bind(student2 , " good eve" , " goodbye");


// // CURRYING 

// // function sumOfThree(a,b,c){
// //     console.log(a+b+c);
// // }

// function sumOfThree(a,b,c){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }

//     }
// }

// console.log(sumOfThree(20)(30)(40));

// //what is the purpose of currying 
// // currying 
// // 1. we want individual args os that we can proceed with that 
// // subway - choose bread - garlic / multigrain 
// // 2. which patty do you want
// /// 3. with cheese or without 

// function chooseBread(bread){
//     return function(patty){
//         return function(cheese){
//             console.log(bread + " " + patty + " " + cheese)
//         }
//     }
    
// }

// chooseBread("multigrain")("chicken")("cheddar")
// // we want to use outer scope var 


// // EVENT BUBBLING AND CAPTURING 

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//event listener ka purpose hota h ki kych bhi ho rha ho vo usko capture krke btaa de 
//scroll , ip , 

grandParent.addEventListener("click",()=>{
    console.log("grandparent clicked")
})

parent.addEventListener("click" , ()=>{
    console.log("parent clicked")
})

child.addEventListener("click",()=>{
    console.log("child clicked")
})

//e.stoppropogation se ruk jayega 
