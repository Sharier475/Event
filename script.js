// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("You just Clicked ");
//     let a = 1;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("You are Inside the Div");
// }

let btn1 = document.querySelector("#btn1");
 btn1.addEventListener("click",()=>{
console.log("button1 was Clicked - handler1");
});
 btn1.addEventListener("click",()=>{
console.log("button1 was Clicked - handler2");
});
const handler3 = () =>{
console.log("button1 was Clicked - handler3");
};
 btn1.addEventListener("click",handler3);


btn1.addEventListener("click",()=>{
console.log("button1 was Clicked - handler4");
});
 btn1.addEventListener("click",()=>{
console.log("button1 was Clicked - handler3");
});

btn1.removeEventListener("click",handler3)