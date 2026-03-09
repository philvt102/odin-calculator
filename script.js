let lcd = document.querySelector("#lcd");
lcd.textContent = `0000000000`;

let keypad = document.querySelector(`#buttons`);

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
    keypad.appendChild(newKey);
})
