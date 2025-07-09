console.log("SCRIPT START");

const grandParent = document.getElementById("grandParent");

const Parent = document.getElementById("parent");

const Child = document.getElementById("child"); // lowercase

grandParent.addEventListener("click",()=>{
    console.log("THIS IS RED BLOCK")
},)
Parent.addEventListener("click",()=>{
    console.log("this is green block")
})
Child.addEventListener("click",()=>{
    console.log("this is blue block")
})

//html ko load krne se pehle hi js load kardiya 


//jo hamara script tag h the normal script tag then html parsing starts as soon as html loads in the pg
//parsing gets paused 
//interview. : async defer
// diff bw async and defer 

// how async works behind the scenes 
// https://www.geeksforgeeks.org/javascript/difference-between-async-defer-attributes-in-html/
// js pehle load kr rha h 


// EVENT CAPTURING
// bottom to top - event bubbling


// STOP PROPOGATION - we can stop this behaviour 
//e.stopPropogation()


//DISADV of Event listeners
//1. event listeners are very expensive
// 2. it works till the end of the program 

// multiple event listeners are being useed 
// it s active very freq , working parallely until the program ends
// product cart - 200 products 
// which can also lead to slow performance
// wht is the alternate of event listeners

// soln of this problem is to use event listeners in an eff way 


const productList = document.getElementById("productList");
productList.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        console.log("CLICKED ON " , event.target.txt)
    }
})


// what is event delegation and hwo can you give practical knowledge abt event delegation 



//IF I WANT TO ADD TWO ELEMENT

const newElement = document.createElement("li");
newElement.textContent = "Bottle"
productList.appendChild(newElement)


// const textBox = document.getElementById("textBox");
// textBox.addEventListener("input",()=>{
//     console.log("TYPED")
// })


// how to implement a search bar how the query is processed 

// hint : setTimeout se hum delay de skte h thoda sa



const textBox = document.getElementById("textBox");

let thisTime;

textBox.addEventListener("input",(event)=>{
    let thisTime = setTimeout(()=>{
         console.log("TYPED" , event.target.value)
    },3000)
   clearTimeout(thisTime);
})


// problem with thsi code is : no data hiding , no encapsulation , anyone can clear from anywhere in the code 
// this is called debouncing in js 
// function wrapping can be done here
// Debouncing means that the fn will be called when there would be a delay eg 200 ms


