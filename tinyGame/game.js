// Initial State of Game
px = py = 10 // wyrm
gs = ts = 20 // boundary
ax = ay = 15 // book
xVal = yVal = 0 // x y values

body = [] // a segment = {x: px, y: py}
segments = 5

// Logic for Game

const game = () => {
    px += xVal
    py += yVal

    context.fillStyle = "#f5deb3"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "#006400"

    if(px < 0) {
        px = ts - 1;
    }

    if(px > ts - 1) {
        px = 0
    }

    if(py < 0) {
        py = ts - 1
    }

    if(py > ts - 1) {
        py = 0
    }

    for(let i = 0; i < body.length; i++){
        context.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs - 2)
        if(body[i].x === px && body[i].y === py) {
            segments = 5
        }
    }

    body.push({x: px, y: py})

    while(body.length > segments) {
        // on reset, shift off extra body segments till back to starting point
        body.shift()
    }

    if(ax === px && ay === py) {
        // if book and wyrm occupy same space, add a new book somewhere
        segments++
        ax = Math.floor(Math.random() * ts)
        ay = Math.floor(Math.random() * ts)
    }



}

// Key Controls
const keyDown = (e) => {
    console.log(e.keyCode)
    switch(e.keyCode) {
        case(65):
            console.log('left')
            break
        case(87):
            console.log('up')
            break
        case(68):
            console.log('right')
            break
        case(83):
            console.log('down')
            break
        case(32):
            console.log('space')
            break
    }
}

// Initialize Game
const init = () => {
    canvas = document.getElementById('game')
    context = canvas.getContext('2d')
    document.addEventListener('keydown', keyDown)
    setInterval(game, 1000/15)
}

document.addEventListener("DOMContentLoaded", init)
