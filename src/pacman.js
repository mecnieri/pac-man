import { isCollisionWithObsticle } from './helpers.js'

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
  }

  move(delta) {
    this.checkDesiredDirectionAndChangeIfPosible(delta, this.desiredDirection)
    this.checkCurrentDirectionAndGo(delta, this.currentDirection)
  }

  checkDesiredDirectionAndChangeIfPosible(delta, desiredDirection) {
    switch (desiredDirection) {
      case 'ArrowRight':
        this.nextX = this.x + this.speed * delta
        if (
          isCollisionWithObsticle(
            'right',
            this.x,
            this.y,
            this.nextX,
            this.radius,
          )
        )
          return
        this.y = Math.round(this.y / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (
          isCollisionWithObsticle(
            'left',
            this.x,
            this.y,
            this.nextX,
            this.radius,
          )
        )
          return
        this.y = Math.round(this.y / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (
          isCollisionWithObsticle('up', this.x, this.y, this.nextY, this.radius)
        )
          return
        this.x = Math.round(this.x / 29.615) * 29.615
        this.currentDirection = this.desiredDirection
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (
          isCollisionWithObsticle(
            'down',
            this.x,
            this.y,
            this.nextY,
            this.radius,
          )
        )
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
        if (
          isCollisionWithObsticle(
            'right',
            this.x,
            this.y,
            this.nextX,
            this.radius,
          )
        ) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
        this.x = this.nextX
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (
          isCollisionWithObsticle(
            'left',
            this.x,
            this.y,
            this.nextX,
            this.radius,
          )
        ) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
        this.x = this.nextX
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (
          isCollisionWithObsticle('up', this.x, this.y, this.nextY, this.radius)
        ) {
          this.x = Math.round(this.x / 29.615) * 29.615
          this.y = Math.round(this.y / 29.615) * 29.615
          return
        }
        this.y = this.nextY
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (
          isCollisionWithObsticle(
            'down',
            this.x,
            this.y,
            this.nextY,
            this.radius,
          )
        ) {
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
