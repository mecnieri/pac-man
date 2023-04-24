import { obsticlesCoords } from './obsticleCoords.js'

export let obsticlesContainer = new PIXI.Container()

obsticlesCoords.forEach(obs => {
  let obsticle = new PIXI.Graphics()

  obsticle.beginFill(0x1919a6)
  obsticle.drawRect(obs.left, obs.top, obs.w, obs.h) // x, y, w, h
  obsticle.endFill()

  obsticlesContainer.addChild(obsticle)
})
