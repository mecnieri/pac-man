import { createApp } from './src/createApp.js'
import Pacman from './src/pacman.js'
import { obsticles } from './src/obsticle.js'

function initGame() {
  const app = createApp()
  console.log(app)
  root.appendChild(app.view)
  const { pacman } = new Pacman()
  app.stage.addChild(pacman)
  app.stage.addChild(obsticles)

  app.ticker.add(delta => {
    // console.log('first')
    // console.log(pacman.x, pacman.y)
    pacman.move(delta)
  })
}
initGame()
