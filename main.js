import { createApp } from './src/createApp.js'
import Pacman from './src/pacman.js'
import { ghostContainer, ghosts } from './src/ghost/ghost.js'
import { obsticlesContainer } from './src/obsticle/obsticle.js'
import { cookiesContainer } from './src/cookies.js'


function initGame() {
  const app = createApp()
  root.appendChild(app.view)

  const { pacman } = new Pacman()

  app.stage.addChild(cookiesContainer)
  app.stage.addChild(obsticlesContainer)
  app.stage.addChild(ghostContainer)
  app.stage.addChild(pacman)

  app.ticker.add(delta => {
    pacman.move(delta)
    ghosts.forEach(gh => gh.move(delta))
  })
}


initGame()
