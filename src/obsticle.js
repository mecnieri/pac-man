let obsticlesCoords = [
  {
    x: 200,
    y: 0,
    w: 40,
    h: 100,
  },
  {
    x: 300,
    y: 100,
    w: 40,
    h: 100,
  },
]

export let obsticles = new PIXI.Container()

obsticlesCoords.forEach(obs => {
  let obsticle = new PIXI.Graphics()
  obsticle.beginFill(0xff3333)
  obsticle.drawRect(obs.x, obs.y, obs.w, obs.h) // x, y, w, h
  obsticle.endFill()
  obsticles.addChild(obsticle)
})
