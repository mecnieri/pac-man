// import { obsticlesCoords } from './obsticleCoords.js'

const cookiesCoords = []

for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
        let cookie = {
            x: i * ((800 - 20 - 10) / 26) + 10 + 20,
            y: j * ((800 - 20 - 10) / 26) + 10 + 20
        }
        cookiesCoords.push(cookie)
    }
}



export let cookiesContainer = new PIXI.Container()

cookiesCoords.forEach(ck => {
    let cookie = new PIXI.Graphics()

    cookie.beginFill(0xd03e19)
    cookie.drawCircle(ck.x, ck.y, 3) // x, y, w, h
    cookie.endFill()

    cookiesContainer.addChild(cookie)
})
