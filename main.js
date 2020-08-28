const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 40
const KEY_DOWN = 38

let x
let y
let ex
let ey

let initPosition = () => {
    x = 0
    y = 0
    ex = Math.floor(Math.random() * 440 + 60 - 50)
    ey = Math.floor(Math.random() * 440 + 60 - 50)
}

let collisionDetection = () => {
    al = x
    ar = x + 50
    at = y
    ab = y + 50

    bl = ex
    br = ex + 50
    bt = ey
    bb = ey + 50
    if (al < br && bl < ar && at < bb && bt < ab) {
        ctx.beginPath()
        ctx.clearRect(ex, ey, 50, 50)
        ctx.closePath()
        ex = Math.floor(Math.random() * 440 + 60 - 50)
        ey = Math.floor(Math.random() * 440 + 60 - 50)
        setTimeout(enemy, 1000)
    }
}

let keyMove = (e) => {
    ctx.beginPath()
    if (e.keyCode == KEY_LEFT) {
        ctx.clearRect(x, y, 50, 50)
        x -= 20 
    }
    if (e.keyCode == KEY_RIGHT) {
        ctx.clearRect(x, y, 50, 50)
        x += 20
    }
    if (e.keyCode == KEY_UP){
        ctx.clearRect(x, y, 50, 50)
        y += 20
    }
    if (e.keyCode == KEY_DOWN){
        ctx.clearRect(x, y, 50, 50)
        y -= 20
    }
    if (x <= 0) {
        ctx.clearRect(x, y, 50, 50)
        x = 0
    }
    if (y <= 0){
        ctx.clearRect(x, y, 50, 50)
        y = 0
    }
    if (x >= 500 - 50){
        ctx.clearRect(x, y, 50, 50)
        x = 500 - 50
    }
    if (y >= 500 - 50) {
        ctx.clearRect(x, y, 50, 50)
        y = 500 - 50
    }
    ctx.closePath()
    collisionDetection (x, y)
    player()
}
document.addEventListener('keydown', keyMove)

//自分
let player = () => {
    ctx.beginPath()
    ctx.fillStyle = 'blue'
    ctx.fillRect(x, y, 50, 50)
    ctx.closePath()
}

//敵
let plus_minus = false
let enemy = () => {
    ctx.beginPath()
    ctx.clearRect(ex, ey, 50, 50)
    ctx.fillStyle = 'red'
    ctx.fillRect(ex, ey, 50, 50)
    ctx.closePath()
    player()
}

window.onload = () => {
    initPosition()
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); 
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);
    enemy(ex, ey)
}