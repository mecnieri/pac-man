import { isCollisionWithObsticle } from '../helpers.js'
import spritesheetjson from '../assets/pacman/moving/spritesheet.json' assert { type: 'json'}
import { Globals } from '../Globals.js'
export default class Pacman {
  constructor() {
    this.frames = Object.values(spritesheetjson.frames)
    this.textures = this.frames.map(fr => {
      const { x, y, w, h } = fr.frame
      const txt = new PIXI.Texture(Globals.resources.pmoving.texture, new PIXI.Rectangle(x, y, w, h))
      return txt
    })
    this.pacman = new PIXI.AnimatedSprite(this.textures)
    this.pacman.anchor.set(0.5, 0.5)
    this.pacman.loop = false
    this.pacman.x = 30
    this.pacman.y = 30
    this.pacman.radius = 20
    this.pacman.animationSpeed = .2
    this.pacman.loop = true
    this.pacman.play()
    this.pacman.desiredDirection = ''
    this.pacman.currentDirection = ''
    this.pacman.speed = 4
    this.onKeyDown()
    this.pacman.move = this.move
    this.pacman.checkDesiredDirectionAndChangeIfPosible = this.checkDesiredDirectionAndChangeIfPosible
    this.pacman.checkCurrentDirectionAndGo = this.checkCurrentDirectionAndGo
    this.pacman.changeDirectionAndRoundCoordinate = this.changeDirectionAndRoundCoordinate
    this.pacman.roundNumber = this.roundNumber
    this.pacman.checkCollisionWithGhosts = this.checkCollisionWithGhosts
    this.pacman.eatingCookie = this.eatingCookie
    this.pacman.eatingCherry = this.eatingCherry
    this.pacman.stop = this.stop
    this.pacman.chasing = false

  }


  move(delta, ghosts, cookies, cherry) {
    this.eatingCookie(cookies)
    this.eatingCherry(cherry)
    this.checkCollisionWithGhosts(ghosts)
    this.checkDesiredDirectionAndChangeIfPosible(delta, this.desiredDirection)
    this.checkCurrentDirectionAndGo(delta, this.currentDirection)
  }

  eatingCookie(objects) {
    for (let i = 0; i < objects.length; i++) {
      if (checkEating(this, objects[i])) {
        objects[i].eaten()
      }
    }
  }
  eatingCherry(objects) {
    for (let i = 0; i < objects.length; i++) {
      if (checkEating(this, objects[i])) {
        objects[i].eaten()
        this.chasing = true
      }
    }
  }

  checkCollisionWithGhosts(ghosts) {
    for (let i = 0; i < ghosts.length; i++) {
      if (checkCollision(this, ghosts[i])) {
        this.chasing ? ghosts[i].stop() : this.stop()
      }
    }
  }
  stop() {
    this.speed = 0
  }
  checkDesiredDirectionAndChangeIfPosible(delta, desiredDirection) {
    switch (desiredDirection) {
      case 'ArrowRight':
        this.nextX = this.x + this.speed * delta
        if (isCollisionWithObsticle('right', this.x, this.y, this.nextX, this.radius)) return
        this.changeDirectionAndRoundCoordinate('y')
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (isCollisionWithObsticle('left', this.x, this.y, this.nextX, this.radius)) return
        this.changeDirectionAndRoundCoordinate('y')
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (isCollisionWithObsticle('up', this.x, this.y, this.nextY, this.radius)) return
        this.changeDirectionAndRoundCoordinate('x')
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (isCollisionWithObsticle('down', this.x, this.y, this.nextY, this.radius,)) return
        this.changeDirectionAndRoundCoordinate('x')
        break
    }
  }
  checkCurrentDirectionAndGo(delta, currentDirection) {
    switch (currentDirection) {
      case 'ArrowRight':
        this.nextX = this.x + this.speed * delta
        if (isCollisionWithObsticle('right', this.x, this.y, this.nextX, this.radius)) {
          this.x = this.roundNumber(this.x)
          this.y = this.roundNumber(this.y)
          return
        }
        this.x = this.nextX
        break
      case 'ArrowLeft':
        this.nextX = this.x - this.speed * delta
        if (isCollisionWithObsticle('left', this.x, this.y, this.nextX, this.radius)) {
          this.x = this.roundNumber(this.x)
          this.y = this.roundNumber(this.y)
          return
        }
        this.x = this.nextX
        break
      case 'ArrowUp':
        this.nextY = this.y - this.speed * delta
        if (isCollisionWithObsticle('up', this.x, this.y, this.nextY, this.radius)) {
          this.x = this.roundNumber(this.x)
          this.y = this.roundNumber(this.y)
          return
        }
        this.y = this.nextY
        break
      case 'ArrowDown':
        this.nextY = this.y + this.speed * delta
        if (isCollisionWithObsticle('down', this.x, this.y, this.nextY, this.radius,)) {
          this.x = this.roundNumber(this.x)
          this.y = this.roundNumber(this.y)
          return
        }
        this.y = this.nextY
        break
    }
  }
  roundNumber(n) {
    return Math.round(n / 29.615) * 29.615
  }
  changeDirectionAndRoundCoordinate(coordinate) {
    coordinate === 'x' ?
      this.x = this.roundNumber(this.x) :
      this.y = this.roundNumber(this.y)
    this.currentDirection = this.desiredDirection
    switch (this.currentDirection) {
      case 'ArrowRight':
        this.rotation = Math.PI
        break;
      case 'ArrowLeft':
        this.rotation = Math.PI * 2
        break;
      case 'ArrowUp':
        this.rotation = Math.PI / 2
        break;
      case 'ArrowDown':
        this.rotation = Math.PI / 2 * 3
        break;

      default:
        break;
    }

  }
  onKeyDown() {
    document.onkeydown = e => {
      e = e || window.event
      this.pacman.desiredDirection = e.key
    }
  }
}

const checkEating = (pacman, object) => {
  return (
    pacman.x + 20 > object.x &&
    pacman.x - 20 < object.x &&
    pacman.y + 20 > object.y &&
    pacman.y - 20 < object.y
  )
}
const checkCollision = (pacman, ghost) => {
  return (
    pacman.x + 20 > ghost.x - 20 &&
    pacman.x - 20 < ghost.x + 20 &&
    pacman.y + 20 > ghost.y - 20 &&
    pacman.y - 20 < ghost.y + 20
  )
}   