import Phaser from 'phaser'

import { CutTheString } from './scenes/cut-the-string'

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000088',
  parent: 'phaser-example',
  scene: CutTheString
}

const game = new Phaser.Game(gameConfig)

game()
