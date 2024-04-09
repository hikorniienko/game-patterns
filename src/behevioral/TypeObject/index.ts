import { TypeObject } from './TypeObject'

/**************************************************
 TEST CASES
**************************************************/

class Player extends TypeObject {
  update = (): void => {
    console.log('Updating player...')
  }

  render = (): void => {
    console.log('Rendering player...')
  }
}

console.log('%c Behevioral: TypeObject ', 'background: pink; font-size: large')

const player = new Player()
player.update()
player.render()
