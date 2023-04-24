
import { obsticlesCoords } from './obsticleCoords.js'
export default class Pacman {
  constructor() {
    this.pacman = new PIXI.Graphics()
    this.pacman.beginFill(0xFDFF00)
    this.pacman.x = 30
    this.pacman.y = 30
    this.pacman.radius = 18
    this.pacman.drawCircle(0, 0, this.pacman.radius)
    this.pacman.endFill()
    this.pacman.desiredDirection = ''
    this.pacman.currentDirection = ''
    this.pacman.speed = 4
    this.onKeyDown()
    this.pacman.move = this.move
    this.pacman.checkDesiredDirectionAndChangeIfPosible = this.checkDesiredDirectionAndChangeIfPosible
    this.pacman.checkCurrentDirectionAndGo = this.checkCurrentDirectionAndGo
    this.nextX = 0
    this.nextY = 0
  }

  move(delta) {
    this.checkDesiredDirectionAndChangeIfPosible(delta, this.desiredDirection)
    this.checkCurrentDirectionAndGo(delta, this.currentDirection)
  }

  checkDesiredDirectionAndChangeIfPosible(delta, desiredDirection) {
    switch (desiredDirection) {
      case 'ArrowRight':
        this.nextX = this.x + this.speed * delta
        if (isNotAllowed('right', this.x, this.y, this.nextX, this.radius)) return
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (isNotAllowed('left', this.x, this.y, this.nextX, this.radius)) return
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (isNotAllowed('up', this.x, this.y, this.nextY, this.radius)) return
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (isNotAllowed('down', this.x, this.y, this.nextY, this.radius)) return
        this.currentDirection = this.desiredDirection
        break
    }
  }
  checkCurrentDirectionAndGo(delta, currentDirection) {
    switch (currentDirection) {
      case 'ArrowRight':
        this.nextX = this.x + this.speed * delta
        if (isNotAllowed('right', this.x, this.y, this.nextX, this.radius)) return
        this.x = this.nextX
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (isNotAllowed('left', this.x, this.y, this.nextX, this.radius)) return
        this.x = this.nextX
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (isNotAllowed('up', this.x, this.y, this.nextY, this.radius)) return
        this.y = this.nextY
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (isNotAllowed('down', this.x, this.y, this.nextY, this.radius)) return
        this.y = this.nextY
        break
    }
  }


  onKeyDown() {
    document.onkeydown = e => {
      e = e || window.event
      this.pacman.desiredDirection = e.key
    }
  }
}


const isNotAllowed = (dir, x, y, next, radius) => {
  switch (dir) {
    case 'right':
      return obsticlesCoords.some(obsticle => {
        return (
          x + radius < obsticle.x &&
          next + radius > obsticle.x &&
          y + radius > obsticle.y &&
          y - radius < obsticle.y + obsticle.h
        )
      })
    case 'left':
      return obsticlesCoords.some(obsticle => {
        return (
          x - radius > obsticle.x + obsticle.w &&
          next - radius < obsticle.x + obsticle.w &&
          y + radius > obsticle.y &&
          y - radius < obsticle.y + obsticle.h
        )
      })
    case 'up':
      return obsticlesCoords.some(obsticle => {
        return (
          x + radius > obsticle.x &&
          x - radius < obsticle.x + obsticle.w &&
          next - radius < obsticle.y + obsticle.h &&
          y - radius > obsticle.y + obsticle.h
        )
      })
    case 'down':
      return obsticlesCoords.some(obsticle => {
        return (
          x + radius > obsticle.x &&
          x - radius < obsticle.x + obsticle.w &&
          y + radius < obsticle.y &&
          next + radius > obsticle.y
        )
      })

    default:
      break
  }
}


// const { up, down, left, right } = {
//   up: 'ArrowUp',
//   down: 'ArrowDown',
//   right: 'ArrowRight',
//   left: 'ArrowLeft',
// }

