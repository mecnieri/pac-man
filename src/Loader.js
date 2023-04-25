import { Globals } from './Globals.js'
let LoaderConfig = {
  cherry: 'src/assets/cherry/cherry.png',
}
export class Loader {
  constructor(loader) {
    this.loader = loader
    this.resources = LoaderConfig
  }
  preload() {
    return new Promise(resolve => {
      for (let key in this.resources) {
        this.loader.add(key, this.resources[key])
      }
      this.loader.load((loader, resourses) => {
        console.log('resourses loaded')
        console.log(PIXI.resources)
        console.log(resourses)
        Globals.resources = resourses
        resolve()
      })
    })
  }
}
