let head = document.querySelector('.head')
let box = document.querySelector('.box')
let body = document.querySelector('body')
let SBody = document.querySelectorAll('.body')
let countX = 0
let countY = 0

let nowDirection = 'R'
creatFood()
let isChange = true
body.addEventListener('keydown', evt => {
    if (evt.key === 'w' || evt.key === 'W') {
        if (nowDirection != 'D' && isChange) {
            nowDirection = 'U'
            isChange = false
        }
    } else if (evt.key === 's' || evt.key === 'S') {
        if (nowDirection != 'U' && isChange) {
            nowDirection = 'D'
            isChange = false
        }
    } else if (evt.key === 'a' || evt.key === 'A') {
        if (nowDirection != 'R' && isChange) {
            nowDirection = 'L'
            isChange = false
        }
    } else if (evt.key === 'd' || evt.key === 'D') {
        if (nowDirection != 'L' && isChange) {
            nowDirection = 'R'
            isChange = false
        }
    }

})

let move = setInterval(() => {
    let food = document.querySelector('.food')
    let x = head.style.left || `30px`
    let y = head.style.top || `0px`
    if (nowDirection === 'R') {
        countX += 15
        head.style.left = 30 + countX + 'px'
    } else if (nowDirection === 'L') {
        countX -= 15
        head.style.left = 30 + countX + 'px'
    } else if (nowDirection === 'U') {
        countY -= 15
        head.style.top = countY + 'px'
    } else if (nowDirection === 'D') {
        countY += 15
        head.style.top = countY + 'px'
    }
    if (head.style.left === food.style.left && head.style.top === food.style.top) {
        box.removeChild(food)
        creatFood()
        createBody()
        SBody[SBody.length - 1].style.left = x
        SBody[SBody.length - 1].style.top = y
    }
    
    let fleg = false

    for (let i = 0; i < SBody.length - 1; i++) {
        SBody[i].style.left = SBody[i + 1].style.left || `15px`
        SBody[i].style.top = SBody[i + 1].style.top || `0px`
        if(SBody[i].style.top === head.style.top && SBody[i].style.left === head.style.left ){
            fleg = true
            console.log('aaa')
        }
    }
    SBody[SBody.length - 1].style.left = x
    SBody[SBody.length - 1].style.top = y
    if(head.style.top === '615px' || head.style.top === '-15px' ||head.style.left === '615px'||head.style.left === '-15px'){
        console.log('aaa')
        clearInterval(move)
        alert('刷新重新开始')
    }
    if(fleg){
        console.log('aaa')
        clearInterval(move)
        alert('刷新重新开始')
    }
    isChange = true

},200);


console.log(Math.floor(Math.random() * 60))
function creatFood() {
    let X = Math.floor(Math.random() * 40) * 15
    let Y = Math.floor(Math.random() * 40) * 15
    let food = document.createElement('div')
    console.log(Y, X)
    food.style.top = Y + 'px'
    food.style.left = X + 'px'
    food.classList.add('food')
    box.appendChild(food)
}
function createBody() {
    let newBody = document.createElement('div')
    newBody.classList.add('body')
    box.appendChild(newBody)
    SBody = document.querySelectorAll('.body')
}

