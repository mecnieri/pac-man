const cookiesCoords = []

// (app width - borders - last square width) / 26 cookie square
// (800 - 20 - 10 ) / 26 ~~ 29.615 
for (let i = 0; i < 26; i++) {
  for (let j = 0; j < 26; j++) {
    cookiesCoords.push({
      x: i * 29.615 + 30,
      y: j * 29.615 + 30,
    })
  }
}

export let cookiesContainer = new PIXI.Container()

cookiesCoords.forEach(ck => {
  let cookie = new PIXI.Graphics()

  cookie.beginFill(0xc7a317)
  cookie.drawCircle(ck.x, ck.y, 3.5) // x, y, r
  cookie.endFill()

  cookiesContainer.addChild(cookie)
})
