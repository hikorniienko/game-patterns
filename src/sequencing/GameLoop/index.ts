import { LoopSystem } from './LoopSystem'

/**************************************************
 TEST CASES
**************************************************/

const loopSystem = new LoopSystem(() => {
  console.log('Updating game...')
})

console.log('%c Sequencing: GameLoop ', 'background: pink; font-size: large')
console.log('Game loop started')
loopSystem.start()
console.log('Game loop stopped')
loopSystem.stop()
