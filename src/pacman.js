export default class Pacman {
  constructor() {
    this.pacman = new PIXI.Graphics()
    this.pacman.beginFill(0xffff00)
    this.pacman.x = 45
    this.pacman.y = 45
    this.pacman.radius = 28
    this.pacman.drawCircle(0, 0, this.pacman.radius)
    this.pacman.endFill()
    this.pacman.arrow = ''
    this.pacman.speed = 3
    this.onKeyDown()
    this.pacman.move = this.move
  }
  move(delta) {
    // console.log(delta)
    console.log(this.x, this.y)
    console.log(this.arrow)
    switch (this.arrow) {
      case 'ArrowRight':
        if (isAllowed('right', this.x, this.y)) return
        this.x += this.speed * delta
        break
      case 'ArrowLeft':
        if (isAllowed('left', this.x, this.y)) return
        this.x -= this.speed * delta
        break
      case 'ArrowUp':
        if (isAllowed('up', this.x, this.y)) return
        this.y -= this.speed * delta
        break
      case 'ArrowDown':
        if (isAllowed('down', this.x, this.y)) return
        this.y += this.speed * delta
        break
    }
  }

  onKeyDown() {
    document.onkeydown = e => {
      e = e || window.event
      this.pacman.arrow = e.key
    }
  }
}
const { up, down, left, right } = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  right: 'ArrowRight',
  left: 'ArrowLeft',
}

const brakePoints = [
  { x: 45, y: 45, allowedFutureDirections: [right, down] },
  { x: 45, y: 455, allowedFutureDirections: [right, up] },
  { x: 455, y: 45, allowedFutureDirections: [left, down] },
  { x: 455, y: 455, allowedFutureDirections: [left, up] },
]

let obsticlesCoords = [
  {
    x: 200,
    y: 0,
    w: 30,
    h: 100,
  },
  {
    x: 300,
    y: 100,
    w: 30,
    h: 100,
  },
]

const isAllowed = (dir, x, y) => {
  switch (dir) {
    case 'right':
      return obsticlesCoords.some(obsticle => {
        return (
          x + 30 > obsticle.x &&
          y + 30 > obsticle.y &&
          y - 30 < obsticle.y + obsticle.h
        )
      })
    case 'left':
      return obsticlesCoords.some(obsticle => {
        return (
          x - 30 < obsticle.x + obsticle.w &&
          y + 30 > obsticle.y &&
          y - 30 < obsticle.y + obsticle.h
        )
      })
    case 'up':
      return obsticlesCoords.some(obsticle => {
        return (
          x + 30 > obsticle.x &&
          x - 30 < obsticle.x + obsticle.w &&
          y - 30 < obsticle.y + obsticle.h
        )
      })
    case 'down':
      return obsticlesCoords.some(obsticle => {
        return (
          x + 30 > obsticle.x &&
          x - 30 < obsticle.x + obsticle.w &&
          y + 30 > obsticle.y
        )
      })

    default:
      break
  }
}
