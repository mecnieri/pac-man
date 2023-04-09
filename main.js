import { createApp } from './src/createApp.js'

function createGameBoard() {
  const app = createApp()
  console.log(app)
  document.body.appendChild(app.view)
}
createGameBoard()
