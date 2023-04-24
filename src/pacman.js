import { obsticlesCoords } from './obsticle/obsticleCoords.js'
export default class Pacman {
  constructor() {
    this.pacman = new PIXI.Graphics()
    this.pacman.beginFill(0xfdff00)
    this.pacman.x = 30
    this.pacman.y = 30
    this.pacman.radius = 20
    this.pacman.drawCircle(0, 0, this.pacman.radius)
    this.pacman.endFill()
    this.pacman.desiredDirection = ''
    this.pacman.currentDirection = ''
    this.pacman.speed = 4
    this.onKeyDown()
    this.pacman.move = this.move
    this.pacman.checkDesiredDirectionAndChangeIfPosible =
      this.checkDesiredDirectionAndChangeIfPosible
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
        if (isNotAllowed('right', this.x, this.y, this.nextX, this.radius))
          return
        this.y = Math.round(this.y / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (isNotAllowed('left', this.x, this.y, this.nextX, this.radius))
          return
        this.y = Math.round(this.y / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (isNotAllowed('up', this.x, this.y, this.nextY, this.radius)) return
        this.x = Math.round(this.x / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (isNotAllowed('down', this.x, this.y, this.nextY, this.radius))
          return
        this.x = Math.round(this.x / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
    }
  }
  checkCurrentDirectionAndGo(delta, currentDirection) {
    switch (currentDirection) {
      case 'ArrowRight':
        this.nextX = this.x + this.speed * delta
        if (isNotAllowed('right', this.x, this.y, this.nextX, this.radius)) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
        this.x = this.nextX
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (isNotAllowed('left', this.x, this.y, this.nextX, this.radius)) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
        this.x = this.nextX
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (isNotAllowed('up', this.x, this.y, this.nextY, this.radius)) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
        this.y = this.nextY
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (isNotAllowed('down', this.x, this.y, this.nextY, this.radius)) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
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
          x + radius < obsticle.left &&
          next + radius > obsticle.left &&
          y + radius > obsticle.top &&
          y - radius < obsticle.bottom
        )
      })
    case 'left':
      return obsticlesCoords.some(obsticle => {
        return (
          x - radius > obsticle.right &&
          next - radius < obsticle.right &&
          y + radius > obsticle.top &&
          y - radius < obsticle.bottom
        )
      })
    case 'up':
      return obsticlesCoords.some(obsticle => {
        return (
          x + radius > obsticle.left &&
          x - radius < obsticle.right &&
          next - radius < obsticle.bottom &&
          y - radius > obsticle.bottom
        )
      })
    case 'down':
      return obsticlesCoords.some(obsticle => {
        return (
          x + radius > obsticle.left &&
          x - radius < obsticle.right &&
          y + radius < obsticle.top &&
          next + radius > obsticle.top
        )
      })

    default:
      break
  }
}
