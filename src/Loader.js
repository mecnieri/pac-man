import { Globals, LoaderConfig } from './Globals.js'

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
        // console.log(resourses)
        Globals.resources = resourses
        resolve()
      })
    })
  }
}
