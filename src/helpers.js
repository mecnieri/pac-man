import { obsticlesCoords } from './obsticle/obsticleCoords.js'

export const isCollisionWithObsticle = (dir, x, y, next, radius) => {
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