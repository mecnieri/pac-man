import { createApp } from './src/createApp.js'
import Pacman from './src/pacman.js'
import { obsticlesContainer } from './src/obsticle.js'
import { cookiesContainer } from './src/cookies.js'



function initGame() {
  const app = createApp()
  root.appendChild(app.view)

  const { pacman } = new Pacman()

  app.stage.addChild(pacman)
  app.stage.addChild(obsticlesContainer)
  app.stage.addChild(cookiesContainer)

  app.ticker.add(delta => {
    pacman.move(delta)
  })
}


initGame()
