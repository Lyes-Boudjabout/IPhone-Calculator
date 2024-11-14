const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const point = document.getElementById("point");
const equals = document.getElementById("equals");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const percent = document.getElementById("percent");
const plusminus = document.getElementById("plusminus");
const clear = document.getElementById("clear");
const screen = document.getElementById("screen");

let initialize = false;
let array = [];
let arrayDigit = [1,2,3,4,5,6,7,8,9,0];

clear.onclick = () => {
    screen.textContent = "0";
    while (array.length != 0) {
        array.pop();
    }
}
one.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-1";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "1";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "1";
                    initialize = false;
                }
                else {
                    screen.textContent += "1";
                } 
            }
        }
    }
}
two.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-2";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "2";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "2";
                    initialize = false;
                }
                else {
                    screen.textContent += "2";
                } 
            }
        }
    }
}
three.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-3";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "3";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "3";
                    initialize = false;
                }
                else {
                    screen.textContent += "3";
                } 
            }
        }
    }
}
four.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-4";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "4";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "4";
                    initialize = false;
                }
                else {
                    screen.textContent += "4";
                } 
            }
        }
    }
}
five.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-5";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "5";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "5";
                    initialize = false;
                }
                else {
                    screen.textContent += "5";
                } 
            }
        }
    }
}
six.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-6";
    } else {
        
    }
    if (screen.textContent == "0") {
        screen.textContent = "6";
    }
    else {
        if (screen.textContent.length == 8) {
            screen.textContent += "";
        }
        else {
            if (initialize) {
                screen.textContent = "6";
                initialize = false;
            }
            else {
                screen.textContent += "6";
            } 
        }
    }
}
seven.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-7";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "7";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "7";
                    initialize = false;
                }
                else {
                    screen.textContent += "7";
                } 
            }
        }
    }
}
eight.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-8";
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "8";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "8";
                    initialize = false;
                }
                else {
                    screen.textContent += "8";
                } 
            }
        }
    }
}
nine.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-9"
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "9";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "9";
                    initialize = false;
                }
                else {
                    screen.textContent += "9";
                } 
            }
        }
    }
}
percent.onclick = () => {
    if (!screen.textContent.includes("-")) {
        screen.textContent += "%";
    }
}
zero.onclick = () => {
    if (screen.textContent == "-0") {
        screen.textContent = "-0"
    }
    else {
        if (screen.textContent == "0") {
            screen.textContent = "0";
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = "0";
                    initialize = false;
                }
                else {
                    screen.textContent += "0";
                } 
            }
        }
    }
}
point.onclick = () => {
    if (screen.textContent.length == 8) {
        screen.textContent += "";
    }
    else {
        if (screen.textContent.includes(".")) {
            screen.textContent += "";
        }
        else {
            if (initialize) {
                screen.textContent = "0.";
                initialize = false;
            }
            else {
                screen.textContent += ".";
            } 
        }
    }
}
function addition() {
    initialize = true;
    array.push(screen.textContent);
    if (array[array.length - 1] !== '+') {
        array.push("+");
    }
}
plus.onclick = () => {
    addition();
}

function substraction() {
    initialize = true; 
    array.push(screen.textContent);
    if (array[array.length - 1] !== '-') {
        array.push("-");
    }
}
minus.onclick = () => {
    substraction();
}

multiply.onclick = () => {
    initialize = true;
    array.push(screen.textContent);
    if (array[array.length - 1] !== '*') {
        array.push("*");
    }
}

divide.onclick = () => {
    initialize = true;
    array.push(screen.textContent);
    if (array[array.length - 1] !== '/') {
        array.push("/");
    }
}

function equality() {
    array.push(screen.textContent);
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("%")) {
            array[i] = array[i].replace(/%/g,"/100");
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        string += element;
    }
    for (let j = 0; j < string.length - 1; j++) {
        if (string[j] == "-" && string[j+1] == "-") {
            string = string.slice(0,j) + '+' + string.slice(j+2);
        }
    }
    screen.textContent = eval(string);
    while (array.length != 0) {
        array.pop();
    }
}
equals.onclick = () => {
    equality();
}

plusminus.onclick = () => {
    if (!screen.textContent.includes("-")) {
        screen.textContent = "-" + screen.textContent;
    }
}
document.addEventListener('keydown', (event) => {
    if (arrayDigit.includes(Number(event.key))) {
        if (screen.textContent == "0") {
            screen.textContent = event.key;
        }
        else {
            if (screen.textContent.length == 8) {
                screen.textContent += "";
            }
            else {
                if (initialize) {
                    screen.textContent = event.key;
                    initialize = false;
                }
                else {
                    screen.textContent += event.key;
                } 
            }
        }
    }
    if (event.key === 'Backspace') {
        if (screen.textContent.length == 1) {
            screen.textContent = "0";
        }
        else {
            const index = screen.textContent.length - 1;
            const inter = screen.textContent.substring(0,index);
            screen.textContent = inter;
        }
    }
    if (event.key === '+') {
        addition();
    }
    if (event.key === '-') {
        substraction();
    }
    if (event.key === '=' || event.key === 'Enter') {
        equality();
    }
});
