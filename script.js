let lcd = document.querySelector("#lcd");
lcd.textContent = `0000000000`;

let keypad = document.querySelector(`#buttons`);

let a, op, b;

function clear(){
    a = op = b = undefined;
    lcd.textContent = lcd.textContent = `0000000000`;
}
function screen(int){
    if(int.toString().length>10){
        lcd.textContent = 'ERR';
    }
    else(lcd.textContent = int)
}

function input(input){  
    if(input=="C"){clear();
        return;
    }
    else if(input=="="){operate(a,op,b);
        return;
    }
    else if(Number.isFinite(+input)){
        input = Number(input);
            if(!a){
                a = input;
                screen(a);
                return;
            }
            else if(!op && a.toString().length<10){
                a = Number(`${a}${input}`);
                screen(a);
                return;
            }
            else if(op && !b){
                b = input;
                screen(b);
                return;
            }
            else if(op && b.toString().length<10){
                b = Number(`${b}${input}`);
                screen(b);
                return;
            }
        }
    else if(!op || !b){
        op = input;
        return;
    }
    else{operate(a, op, b);
        a = lcd.textContent;
        op = input;
        b = undefined;
        return;
    }
}

function operate(a, op, b){
    if(op=="/" && b=="0"){
        alert(`I'm sorry, Dave. I can't do that
            Divide by zero error`);
        clear();
        return;
    }
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
    screen(output.toPrecision(9)*1);
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
