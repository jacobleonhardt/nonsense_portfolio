const renderArt = () => {
    // const art = document.getElementById('art')
    const context = art.getContext("2d")
    for (let x = 0; x < 255; x++) { // 255 for RGB
        for (let y = 0; y < 255; y++) {
            let z = Math.ceil(Math.random() * 255)
            if ((x ^ y) % z) {
                context.fillRect(x * ((x ^ y) % z), y * ((x ^ y) % z), x, y)
                context.fillStyle = `rgb(${y}, ${z % 2}, ${x})`
            }
        }
    }
}

renderArt()
