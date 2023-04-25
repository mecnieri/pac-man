import { createApp } from './src/createApp.js'
import Pacman from './src/pacman/pacman.js'
import { ghostContainer, ghosts } from './src/ghost/ghost.js'
import { obsticlesContainer } from './src/obsticle/obsticle.js'
import { cookiesContainer, cookies } from './src/cookies.js'
import { cherrysContainer, cherries, createCherry } from './src/cherry.js'
import { Loader } from './src/Loader.js'

function initGame() {
  // create canvas
  const app = createApp()
  root.appendChild(app.view)
  // load sprites
  const loader = new Loader(app.loader)
  loader.preload().then(() => start())

  function start() {


    console.log('game started')
    const { pacman } = new Pacman()

    app.stage.addChild(cookiesContainer)
    app.stage.addChild(obsticlesContainer)
    app.stage.addChild(ghostContainer)
    app.stage.addChild(cherrysContainer)
    app.stage.addChild(pacman)
    const cherry = createCherry()
    app.stage.addChild(cherry)

    app.ticker.add(delta => {

      pacman.move(delta, ghosts, cookies, cherries)
      ghosts.forEach(gh => gh.move(delta))
    })
    // console.log(window.innerHeight)
    // console.log(document.getElementsByTagName('canvas'))
    // document.getElementsByTagName('canvas')[0].height = window.innerHeight - 200
  }
}

initGame()
