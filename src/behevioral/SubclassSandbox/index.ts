import { GameObject } from './SubclassSandbox'

/**************************************************
 TEST CASES
**************************************************/

class Player extends GameObject {
  update = (): void => {
    console.log('Updating player...')
  }

  render = (): void => {
    console.log('Rendering player...')
  }

  move = (direction: string): void => {
    console.log(`Player is moving ${direction}`)
  }
}

const player = new Player(0, 0)

console.log('%c Behevioral: Subclass Sandbox ', 'background: pink; font-size: large')

player.move('up')
player.update()
player.render()
