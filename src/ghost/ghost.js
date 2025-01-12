import { isCollisionWithObsticle } from '../helpers.js'
import { changeDirection } from './ghostHelpers.js'
import spritesheetjson from '../assets/ghost/spritesheet.json' with { type: 'json' }
import { Globals } from '../Globals.js'

class Ghost {
  constructor(x, y, textures1, feared) {
    this.ghost = new PIXI.AnimatedSprite(textures1)
    this.ghost.feared = feared
    this.ghost.anchor.set(0.5, 0.5)
    this.ghost.animationSpeed = 0.2
    this.ghost.play()
    this.ghost.x = x
    this.ghost.y = y
    this.ghost.currentDirection = changeDirection()
    this.ghost.move = this.move
    this.ghost.checkCurrentDirectionAndGo = this.checkCurrentDirectionAndGo
    this.ghost.stop = this.stop
    this.ghost.speed = 3
    this.ghost.radius = 20
  }
  move(delta) {
    this.checkCurrentDirectionAndGo(delta, this.currentDirection)
  }
  stop() {
    this.speed = 0
    console.log(this.feared)
    // this.animatedSprite.textures = this.feared

    // console.log('I crushed', this.color)
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
          this.currentDirection = changeDirection()
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
          this.currentDirection = changeDirection()
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
          this.currentDirection = changeDirection()
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
          this.currentDirection = changeDirection()
          return
        }
        this.y = this.nextY
        break
    }
  }
}

export const createGhosts = () => {
  const ghostContainer = new PIXI.Container()
  let frames = Object.values(spritesheetjson.frames)

  const arrs = [
    [frames[0], frames[1]],
    [frames[6], frames[7]],
    [frames[8], frames[9]],
    [frames[10], frames[11]],
    [frames[2], frames[3]],
    // [frames[4], frames[5]],
  ]

  let txts = arrs.map(frames => {
    return frames.map(fr => {
      const { x, y, w, h } = fr.frame
      const txt = new PIXI.Texture(
        Globals.resources.ghosts.texture,
        new PIXI.Rectangle(x, y, w, h),
      )
      return txt
    })
  })

  for (let i = 0; i < arrs.length; i++) {
    const { ghost } = new Ghost(
      29.615 * 13,
      29.615 * 14 + i * 29,
      txts[i],
      txts[4],
    )
    ghostContainer.addChild(ghost)
  }
  return ghostContainer
}
