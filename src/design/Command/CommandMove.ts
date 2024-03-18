import { Command } from './Command'

export interface MoveCommandObject {
  move: (x: number, y: number) => void
  x: () => number
  y: () => number
}

/**
 * CommandMove
 * @description Move command class for moving objects
 * @extends Command
 * @param {I} obj - object to move
 * @param {number} x - x coordinate
 * @param {number} y - y coordinate
 * @typeParam {I} - object to move
 */
export class CommandMove<I extends MoveCommandObject> extends Command {
  obj: I
  x: number
  y: number
  xBefore: number
  yBefore: number

  constructor (obj: I, x: number, y: number) {
    super()
    this.obj = obj
    this.xBefore = obj.x()
    this.yBefore = obj.y()
    this.x = x
    this.y = y
  }

  execute = (): void => {
    this.obj.move(this.x, this.y)
  }

  undo = (): void => {
    this.obj.move(this.xBefore, this.yBefore)
  }
}
