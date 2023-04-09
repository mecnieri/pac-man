import { createApp } from './src/createApp.js'
import Pacman from './src/pacman.js'

function initGame() {
  const app = createApp()
  console.log(app)
  root.appendChild(app.view)
  const { pacman } = new Pacman()
  app.stage.addChild(pacman)

  app.ticker.add(() => {
    pacman.move()
  })
}
initGame()
