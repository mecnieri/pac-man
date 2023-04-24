
export let cherries = []

export let cherrysContainer = new PIXI.Container()

// cherrysCoords.forEach(obs => {
let cherry = new PIXI.Graphics()

cherry.beginFill(0xFF0000)
cherry.drawCircle(0, 0, 10) // x, y, w, h
cherry.x = 30
cherry.y = 240
cherry.eaten = function () {
    this.visible = false
}
cherry.endFill()
cherries.push(cherry)
cherrysContainer.addChild(cherry)
// })
