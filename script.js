let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("You just Clicked ");
    let a = 1;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You are Inside the Div");
}
