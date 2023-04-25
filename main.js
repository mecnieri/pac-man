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
  }
}

initGame()

// console.log(PIXI)
// PIXI.Loader([
//   'src/assets/cherry/cherry.png',
//   // 'scene/middleground.png',
// ]).then(() => {
//   // initialize background image
//   const cherries = PIXI.Sprite.from('scene/background.png')
//   app.stage.addChild(background)

//   // add the middle ground
//   const middleground = PIXI.Sprite.from('scene/middleground.png')
//   app.stage.addChild(middleground)

//   // scale stage container to match the background size
//   app.stage.scale.x = app.view.width / background.width
//   app.stage.scale.y = app.view.height / background.height
// })
