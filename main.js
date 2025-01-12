import { createApp } from './src/createApp.js'
import Pacman from './src/pacman/pacman.js'
import { createGhosts } from './src/ghost/ghost.js'
import { obsticlesContainer } from './src/obsticle/obsticle.js'
import { cookiesContainer } from './src/cookies.js'
import { Cherry, cherrysContainer } from './src/cherry.js'
import { Loader } from './src/Loader.js'
import { Globals } from './src/Globals.js'

function initGame() {
  // create canvas
  const app = createApp()
  root.appendChild(app.view)

  // load sprites
  const loader = new Loader(app.loader)
  loader.preload().then(() => start())

  function start() {
     const { pacman } = new Pacman()

    const ghostsContainer = createGhosts()

    let cherry = new Cherry(Globals.resources['cherry'].texture)

    cherrysContainer.addChild(cherry)

    app.stage.addChild(
      cookiesContainer,
      obsticlesContainer,
      cherrysContainer,
      ghostsContainer,
      pacman,
    )

    app.ticker.add(delta => {
      pacman.move(
        delta,
        ghostsContainer.children,
        cookiesContainer.children,
        cherrysContainer.children,
      )
      ghostsContainer.children.forEach(gh => gh.move(delta))
    })
  }
}

initGame()
