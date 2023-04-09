export default class Pacman {
  constructor() {
    this.pacman = new PIXI.Graphics()
    this.pacman.beginFill(0xffff00)
    this.pacman.drawCircle(30, 30, 30)
    this.pacman.endFill()
    this.pacman.arrow = 'ArrowRight'
    this.pacman.move = this.move
    this.pacman.speed = 4
    this.onKeyDown()
  }
  move() {
    console.log(this.arrow)
    switch (this.arrow) {
      case 'ArrowRight':
        this.x += this.speed
        break
      case 'ArrowLeft':
        this.x -= this.speed
        break
      case 'ArrowUp':
        this.y -= this.speed
        break
      case 'ArrowDown':
        this.y += this.speed
        break
    }
  }
  onKeyDown() {
    document.onkeydown = e => {
      e = e || window.event
      this.pacman.arrow = e.key
    }
  }
}
