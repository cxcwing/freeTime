let btn = document.querySelector('.btn')
let BigBox = document.querySelector('.BigBox')
let leftHT = document.querySelector('.leftHT')
let leftHB = document.querySelector('.leftHB')
let rightHT = document.querySelector('.rightHT')
let rightHB = document.querySelector('.rightHB')

let Q = document.querySelector('.Q')
let W = document.querySelector('.W')
let E = document.querySelector('.E')
let R = document.querySelector('.R')

let A = document.querySelector('.A')
let S = document.querySelector('.S')
let D = document.querySelector('.D')
let F = document.querySelector('.F')
let kongge = document.querySelector('.kongge')


let mouseX = 0
let mouseY = 0
let countX = -0.02
let countY = 0

function XMove(XChange) {
    //T transform: rotateZ(45deg) scaleY(1);
    //B transform: rotateZ(50deg) scaleY(1);
    // console.log('aaa',countX,XChange)
    if (XChange > 0) {

        if (countX <= 0.12) {
            countX += 0.02
        }
        leftHT.style.transform = `rotateZ(45deg) scaleY(${1 + countX})`
    } else {
        if (countX >= -0.19) {
            countX -= 0.02
        }
        leftHT.style.transform = `rotateZ(45deg) scaleY(${1 + countX})`
    }
}
function YMove(YChange) {
    if (YChange > 0) {
        if (countY <= 13) {
            countY++
        }
        leftHB.style.transform = `rotateZ(${50 + countY}deg) scaleY(1)`
    } else {
        if (countY >= -8) {
            countY--
        }
        leftHB.style.transform = `rotateZ(${50 + countY}deg) scaleY(1)`
    }
}

BigBox.addEventListener('mouseover', evt => {
    console.log(mouseY - evt.clientY, mouseX === evt.clientX, evt.clientX, evt.clientY)
    if (!mouseX && !mouseY) {
        mouseX = evt.clientX
        mouseY = evt.clientY
    } else {
        XMove(mouseX - evt.clientX)
        YMove(mouseY - evt.clientY)
        mouseX = evt.clientX
        mouseY = evt.clientY
    }
})

BigBox.addEventListener("keydown",evt =>{
    console.log(evt.key)
    if(evt.key === 'q' || evt.key === 'Q'){
        Q.classList.add('active')
        rightHT.style.transform = `rotateZ(11deg) scaleY(1.1)`
        rightHB.style.transform = `rotateZ(31deg) scaleY(1)`
    }
    else if(evt.key === 'w' || evt.key === 'W'){
        W.classList.add('active')
        rightHT.style.transform = `rotateZ(18deg) scaleY(1.04)`
        rightHB.style.transform = `rotateZ(28deg) scaleY(1)`
    }
    else if(evt.key === 'e' || evt.key === 'E'){
        E.classList.add('active')
        rightHT.style.transform = `rotateZ(18deg) scaleY(1.04)`
        rightHB.style.transform = `rotateZ(41deg) scaleY(0.97)`
    }
    else if(evt.key === 'r' || evt.key === 'R'){
        R.classList.add('active')
        rightHT.style.transform = `rotateZ(18deg) scaleY(1.04)`
        rightHB.style.transform = `rotateZ(54deg) scaleY(0.97)`
    }
    else if(evt.key === 'a' || evt.key === 'A'){
        A.classList.add('active')
        rightHT.style.transform = `rotateZ(7deg) scaleY(1.06)`
        rightHB.style.transform = `rotateZ(26deg) scaleY(0.97)`
    }
    else if(evt.key === 's' || evt.key === 'S'){
        S.classList.add('active')
        rightHT.style.transform = `rotateZ(7deg) scaleY(1.03)`
        rightHB.style.transform = `rotateZ(38deg) scaleY(0.96)`
    }
    else if(evt.key === 'd' || evt.key === 'D'){
        D.classList.add('active')
        rightHT.style.transform = `rotateZ(11deg) scaleY(0.96)`
        rightHB.style.transform = `rotateZ(39deg) scaleY(0.96)`
    }
    else if(evt.key === 'f' || evt.key === 'F'){
        F.classList.add('active')
        rightHT.style.transform = `rotateZ(11deg) scaleY(0.96)`
        rightHB.style.transform = `rotateZ(56deg) scaleY(0.96)`
    }
    else if(evt.key === ' '){
        kongge.classList.add('active')
        rightHT.style.transform = `rotateZ(-14deg) scaleY(1.01)`
        rightHB.style.transform = `rotateZ(64deg) scaleY(0.99)`
    }
 
})
BigBox.addEventListener("keyup",evt =>{
    if(evt.key === 'q'){
        Q.classList.remove('active')
    }
    else if(evt.key === 'w'){
        W.classList.remove('active')
    }
    else if(evt.key === 'e'){
        E.classList.remove('active')
    }
    else if(evt.key === 'r'){
        R.classList.remove('active')
    }
    else if(evt.key === 'a'){
        A.classList.remove('active')
    }
    else if(evt.key === 's'){
        S.classList.remove('active')
    }
    else if(evt.key === 'd'){
        D.classList.remove('active')
    }
    else if(evt.key === 'f'){
        F.classList.remove('active')
    }
    else if(evt.key === ' '){
        kongge.classList.remove('active')
    }
    
})

