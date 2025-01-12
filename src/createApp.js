// export const createApp = () =>
//   new PIXI.Application({
//     width: 800,
//     height: 890,
//     backgroundColor: 0x2121de
//   })


export const createApp = (width = 800, height = 890, color = '0x2121de') => {
  const app = new PIXI.Application({
    width: width,
    height: height,
    antialias: true,
    backgroundColor: color,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    backgroundAlpha: 0,
  })
  if (window.innerWidth < width) {
    app.renderer.resize(window.innerWidth, window.innerWidth)
    app.stage.scale.set(window.innerWidth / width)
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < width) {
      app.renderer.resize(window.innerWidth, window.innerWidth)
      app.stage.scale.set(window.innerWidth / width)
    } else {
      app.renderer.resize(width, height)
      app.stage.scale.set(1)
    }
  })

  globalThis.__PIXI_APP__ = app
  root.appendChild(app.view)
  return app
}