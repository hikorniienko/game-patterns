import { GameLoop } from './GameLoop'

/**************************************************
 TEST CASES
**************************************************/

const gameLoop = new GameLoop(() => {
  console.log('Updating game...')
})

console.log('%c Sequencing: GameLoop ', 'background: pink; font-size: large')
console.log('Game loop started')
gameLoop.start()
console.log('Game loop stopped')
gameLoop.stop()
