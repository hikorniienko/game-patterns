import { UpdateSystem, UpdateObjectSystem } from './UpdateSystem'

/**************************************************
 TEST CASES
**************************************************/

class Player extends UpdateObjectSystem {
  health: number = 100

  isRemoved = (): boolean => {
    return this.health <= 0
  }

  update = (): void => {
    this.health -= 10
    console.log(`Player health: ${this.health}`)
  }
}

const updateSystem = new UpdateSystem()
updateSystem.add(new Player())

console.log('%c Sequencing: UpdateMethod ', 'background: pink; font-size: large')
updateSystem.update()
