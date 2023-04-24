import { obsticlesCoords } from './obsticleCoords.js'

export let obsticlesContainer = new PIXI.Container()

obsticlesCoords.forEach(obs => {
  let obsticle = new PIXI.Graphics()

  obsticle.beginFill(0xfe3383)
  obsticle.drawRect(obs.x, obs.y, obs.w, obs.h) // x, y, w, h
  obsticle.endFill()

  obsticlesContainer.addChild(obsticle)
})
