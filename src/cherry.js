import { Globals } from './Globals.js'
export let cherries = []

export let cherrysContainer = new PIXI.Container()

// cherrysCoords.forEach(obs => {
let cherry = new PIXI.Graphics()
const cherrySprite = new PIXI.Sprite.from(Globals.resources['cherry'])
console.log(Globals.cherry)
console.log(Globals.resources)
console.log(Globals)
cherry.beginFill(0xff0000)
cherry.drawCircle(0, 0, 10) // x, y, w, h
cherry.x = 30
cherry.y = 240
cherry.eaten = function () {
  this.visible = false
}

cherry.endFill()
cherries.push(cherry)
cherrysContainer.addChild(cherrySprite)
// })
