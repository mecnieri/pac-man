const cookiesCoords = []

for (let i = 0; i < 26; i++) {
  for (let j = 0; j < 29; j++) {
    cookiesCoords.push({
      x: i * 29.615 + 30,
      y: j * 29.615 + 30,
    })
  }
}

export let cookiesContainer = new PIXI.Container()

let score = 0

class Cookie extends PIXI.Graphics {
  constructor(x, y) {
    super()
    this.beginFill(0xc7a317)
    this.drawCircle(0, 0, 3.5) // x, y, r
    this.endFill()
    this.x = x
    this.y = y
  }
  eaten() {
    if (this.visible) {
      score += 10
      scoreh1.innerText = `Score: ${score}`
    }
    this.visible = false
  }
}

cookiesCoords.forEach(ck => {
  let cookie = new Cookie(ck.x, ck.y)
  cookiesContainer.addChild(cookie)
})
