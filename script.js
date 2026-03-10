let lcd = document.querySelector("#lcd");
lcd.textContent = `0000000000`;

let keypad = document.querySelector(`#buttons`);

let a, op, b;

function input(input){  
    if(input=="="){operate(a,op,b);}
    if(Number.isFinite(+input)){
        if(!a){
            a = input;
            lcd.textContent = a;
            return;
        }
        else if(!op && a.length<10){
            a+=input;
            lcd.textContent = a;
            return;
        }
        else if(op && !b){
            b = input;
            lcd.textContent = b;
            return;
        }
        else if(op && b.length<10){
            b+=input;
            lcd.textContent = b;
            return;
        }
    }
    else{
        op = input;
        return;
    }
}

function operate(a, op, b){
    let A=Number(a);
    let B = Number(b);
    let output;
    switch (op){
        case "+": output = A+B;
            break;
        case "-": output = A-B;
            break;
        case "*": output = A*B;
            break;
        case "/": output = A/B;
    }
    lcd.textContent = output;
}

const keys = [7,8,9,`+`,4,5,6,`-`,1,2,3,`/`,`C`,0,`=`,`*`];
keys.forEach((currentKey)=>{
    let newKey = document.createElement("div");
    newKey.style.width = "60px";
    newKey.style.aspectRatio = "1 / 1";
    newKey.textContent = currentKey;
    newKey.style.border = "2px solid black";
    newKey.style.margin = "5px";
    newKey.style.display = "flex";
    newKey.style.justifyContent = "center";
    newKey.style.alignItems = "center";
    newKey.addEventListener("click", ()=>{input(newKey.textContent)});
    keypad.appendChild(newKey);
})
