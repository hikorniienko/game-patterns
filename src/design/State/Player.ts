import { StateSystem, StateSubjectSystem } from './StateSystem'

/**
 * Player
 */
export class Player extends StateSubjectSystem {}

/**
 * Player State (Idle, Walk, Jump)
 */
export class PlayerState extends StateSystem {
  player: Player
  name: string

  constructor (name: string, player: Player) {
    super()
    this.name = name
    this.player = player
  }

  enter = (): void => {
    console.log(`Player ${this.name} state entered`)
  }

  exit = (): void => {
    console.log(`Player ${this.name} state exited`)
  }

  execute = (): void => {
    console.log(`Player ${this.name} state executed`)
  }
}
