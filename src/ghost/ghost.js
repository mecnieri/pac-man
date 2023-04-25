
import { isCollisionWithObsticle } from '../helpers.js'
import { changeDirection } from './ghostHelpers.js'
import spritesheetjson from '../assets/ghost/spritesheet.json' assert { type: 'json'}
import { Globals } from '../Globals.js'

export const ghosts = []


export const createGhosts = () => {
    const ghostContainer = new PIXI.Container()
    for (let i = 0; i < 4; i++) {
        const { ghost } = new Ghost(29.615 * 13, 29.615 * 14 + i * 29,)
        ghostContainer.addChild(ghost)
        ghosts.push(ghost)
    }
    return ghostContainer
}


export default class Ghost {
    constructor(x, y,) {

        this.frames = Object.values(spritesheetjson.frames)
        this.textures = this.frames.map(fr => {
            const { x, y, w, h } = fr.frame
            console.log(Globals)
            const txt = new PIXI.Texture(Globals.resources.ghosts.texture, new PIXI.Rectangle(x, y, w, h))
            return txt
        })

        this.ghost = new PIXI.AnimatedSprite(this.textures)
        console.log(this.ghost)
        this.ghost.anchor.set(0.5, 0.5)
        this.ghost.animationSpeed = .2
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
