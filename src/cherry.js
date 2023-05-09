// import { Globals } from './Globals.js'
 
export let cherrysContainer = new PIXI.Container()

export class Cherry extends PIXI.Sprite {
  constructor(texture) {
    super()
    this.texture = texture
    this.x = 30
    this.y = 240
    this.anchor.set(0.5)
    this.pivot.set(0.5)
  }

  eaten() {
    this.visible = false
  }
}
