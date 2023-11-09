let a = document.getElementById("a");
let b = document.getElementById("b");
let result = document.getElementById("result");


function Addition(){

    let result = parseInt(a.value) + parseInt(b.value);
    document.getElementById("result").innerText = result;
}

function Subtraction(){
    
        let result = parseInt(a.value) - parseInt(b.value);
        document.getElementById("result").innerText = result;
}

function Multiplication(){
    
        let result = parseInt(a.value) * parseInt(b.value);
        document.getElementById("result").innerText = result;
}

function Division(){
        
        let result = parseInt(a.value) / parseInt(b.value);
        document.getElementById("result").innerText = result;
}
