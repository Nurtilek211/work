let number = document.querySelector(".number")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let ligt4 = document.querySelector(".ligh4")
let yellow = document.querySelector(".yellow")
let str = document.querySelector(".str")
let trafick = document.querySelector(".trafick")
let ligt2 = document.querySelector(".ligh2")


let number1 = document.querySelector(".number1")
let red1 = document.querySelector(".red1")
let green1 = document.querySelector(".green1")
let yellow1 = document.querySelector(".yellow1")
let str1 = document.querySelector(".str1")
let trafick1 = document.querySelector(".trafick1")
let ligt1 = document.querySelector(".ligh1")
let box1 = document.querySelector(".box1")
let ligt3 = document.querySelector(".ligh3")



let timer = 15;
let timer1 = 15;

function getTimer() {
    timer--;
    number.innerHTML = timer;
    if (timer <= 0) {
        timer = 15;


        if (red.style.backgroundColor == "black") {
            red.style.backgroundColor = "red"
            green.style.backgroundColor = "black"
            str1.style.color = "green"
            trafick1.style.borderColor = "green"
            box1.style.borderColor = "green"
        }
        else {
            red.style.backgroundColor = "black"
            green.style.backgroundColor = "green"
            str.style.color = "green"
            box1.style.borderColor = "red"
        }
    }
}

function getTimer1() {
    timer1--;
    number1.innerHTML = timer1;
    if (timer1 <= 0) {
        timer1 = 15;

        if (green1.style.backgroundColor == "black") {
            green1.style.backgroundColor = "green"
            red1.style.backgroundColor = "black"
            str.style.color = "red"
        } else {
            green1.style.backgroundColor = "black"
            red1.style.backgroundColor = "red"
            str1.style.color = "red"
            trafick1.style.borderColor = "red"
            box1.style.borderColor = "red"
        }
    }

}

function yel() {
    if (timer == 3 || timer == 1) {
        ligt1.style.borderColor = "yellow"
        ligt1.style.backgroundColor = "black"
        ligt1.style.color = "white"
    }
    else {
        ligt1.style.borderColor = "black"
        ligt1.style.backgroundColor = "yellow"
        ligt1.style.color = "black"
    }

    if (timer1 == 3 || timer1 == 1) {
        ligt4.style.borderColor = "yellow"
        ligt4.style.backgroundColor = "black"
        ligt4.style.color = "white"
    }
    else {
        ligt4.style.borderColor = "black"
        ligt4.style.backgroundColor = "yellow"
        ligt4.style.color = "black"
    }
}

function strl() {
    if (timer % 2 === 0 && str.style.color === "green") {
        ligt2.style.borderColor = "yellow";
        ligt2.style.backgroundColor = "black";
    } else {
        ligt2.style.borderColor = "black";
        ligt2.style.backgroundColor = "rgb(31, 31, 31)";
    }


    if (timer1 % 2 === 0 && str1.style.color === "green") {
        ligt3.style.borderColor = "yellow";
        ligt3.style.backgroundColor = "black";
    } else {
        ligt3.style.borderColor = "black";
        ligt3.style.backgroundColor = "rgb(31, 31, 31)";
    }
}

setInterval(getTimer, 500)
setInterval(getTimer1, 500)
setInterval(yel)
setInterval(strl)