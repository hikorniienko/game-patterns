import { Clone } from './Clone'

/**************************************************
 TEST CASES
**************************************************/

class Enemy extends Clone {
  constructor (public name: string, public health: number, public damage: number) {
    super()
  }
}

const goblin = new Enemy('Goblin', 100, 10)

const goblinShaman = goblin.clone()
goblinShaman.name = 'Goblin Shaman'

console.log('%c Design: Prototype ', 'background: pink; font-size: large')
console.log('goblin:', goblin.name, goblin.health, goblin.damage)
console.log('goblinShaman:', goblinShaman.name, goblinShaman.health, goblinShaman.damage)
