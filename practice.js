let btnMode = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light";

btnMode.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
        // body.style.backgroundColor = "black";
    }
    else {
        currMode = "light";
         body.classList.remove("dark");
         body.classList.add("light");
        // body.style.backgroundColor = "white";
    }

    console.log(currMode);
});