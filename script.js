let input = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let output = '';

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            output = eval(output);
            input.value = output;
        }
        else if(e.target.innerHTML == 'AC'){
            output = '';
            input.value = output;
        }
        else if(e.target.innerHTML == 'DEL'){
            output = output.substring(0, output.length-1);
            input.value = output;
        }
        else{
            output = output  + e.target.innerHTML;
            input.value = output;
        }
    })
})

function color(){
    var x = document.getElementById("Heading");
    if(x.style.color == "black"){
        x.style.color = "red";
    }
    else if(x.style.color == "red"){
        x.style.color = "blue";
    }
    else if(x.style.color == "blue"){
        x.style.color = "orange";
    }
    else if(x.style.color == "orange"){
        x.style.color = "yellow";
    }
    else if(x.style.color == "yellow"){
        x.style.color = "black";
    }
    else{
        x.style.color = "black";
    }
}
setInterval(color, 500);