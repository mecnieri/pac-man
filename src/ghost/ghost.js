
import { isCollisionWithObsticle } from '../helpers.js'
import { ghostColors, changeDirection } from './ghostHelpers.js'

export const ghostContainer = new PIXI.Container()
export const ghosts = []
export default class Ghost {
    constructor(x, y, color) {
        this.ghost = new PIXI.Graphics()
            .beginFill(color)
            .drawCircle(0, 0, 20)
            .endFill()
        this.ghost.x = x
        this.ghost.y = y
        this.ghost.color = color
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

for (let i = 0; i < 4; i++) {

    const { ghost } = new Ghost(29.615 * 5, 50 * i + 100, ghostColors[i])
    ghostContainer.addChild(ghost)
    ghosts.push(ghost)

    
}

