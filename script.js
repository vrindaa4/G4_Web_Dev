// // console.log("HELLO WORLD");

// // console.log(a);

// // var a = 123 ;

// // console.log(a);

// // function abc(){
// //     console.log('THIS IS FUNCTION ABC');

// //     function hgf(){
// //         console.log("THIS IS HGF");
// //     }

// //     hgf();
// // }

// // var a = 200;
// // console.log(a);
// // xyz();
// // var xyz= ()=>{
// //     console.log(XYZ FUNCTION CALLED);
// // }

// // //types of error ->
// // //1. synatx error
// // //2.type error
// // //3. undefined error 


// // //compound statement 
// //grandparent
// // var a= 10;
// // var b = 200;
// // var c = 300;

// // console.log(d);

// console.log(a);
// console.log(b);
// console.log(c);
// {
//     //parent 
//     console.log(a);
// console.log(b);
// console.log(c);
// {
//     //child
//     var d = 200;

//     console.log(a);
// console.log(b);
// console.log(c);
// }

// }



// function abc(){
//     var a = 100;
//     var b = 200;
//     var c= 300;
//     function def(){
//         var d = 400;
//         function ijk(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//         }
//         ijk();
//     }
//     def();
// }
// abc();

for(var i=0; i<=5 ; i++){
    //console.log(i);
    setTimeout(()=>{
        console.log(i);
    },2000)
}

//closure - closure is the combination of a fn bundled together 
// adv of closures - data hiding and encapsulation 
// disadv of closure - 1.closure holds the state and memory 
// 2. overcomsumption of memory
// 3. not garbage collected 

//event listener is very expensive

// HOF

function xyz(cb){
    console.log("I am XYZ fn");
    cb();
}

xyz(cb);

// hof ka 2nd part return a fn ka code eg

// HOC -.> react
