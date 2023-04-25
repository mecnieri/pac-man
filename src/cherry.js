import { Globals } from './Globals.js'
export let cherries = []

export let cherrysContainer = new PIXI.Container()

export const createCherry = () => {

  const cherrySprite = new PIXI.Sprite(Globals.resources['cherry'].texture)
  cherrySprite.x = 30
  cherrySprite.y = 240
  cherrySprite.anchor.set(.5)
  cherrySprite.pivot.set(.5)
  cherrySprite.eaten = function () {
    this.visible = false
  }

  cherries.push(cherrySprite)
  return cherrysContainer.addChild(cherrySprite)

}
