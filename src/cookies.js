const cookiesCoords = []
export const cookies = []

// (app width - borders - last square width) / 26 cookie square
// (800 - 20 - 10) / 26 ~~ 29.615 
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

cookiesCoords.forEach(ck => {
  let cookie = new PIXI.Graphics()

  cookie.beginFill(0xc7a317)
  cookie.drawCircle(0, 0, 3.5) // x, y, r
  cookie.endFill()
  cookie.x = ck.x
  cookie.y = ck.y
  cookie.eaten = function () {
    if (this.visible) {
      score += 10
      scoreh1.innerText = `Score: ${score}`
      console.log(score)
    }
    this.visible = false
  }
  cookies.push(cookie)
  cookiesContainer.addChild(cookie)
})

