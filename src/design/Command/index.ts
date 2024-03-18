import { CommandMove, type MoveCommandObject } from './CommandMove'

/**************************************************
 TEST CASES
**************************************************/

class Box implements MoveCommandObject {
  protected _x: number = 0
  protected _y: number = 0

  move = (x: number, y: number): void => {
    this._x = x
    this._y = y
  }

  x = (): number => {
    return this._x
  }

  y = (): number => {
    return this._y
  }
}

const box = new Box()
const moveCommand = new CommandMove<Box>(box, 10, 10)

console.log('%c Design: Command ', 'background: pink; font-size: large')
moveCommand.execute()
console.log('execute:', box.x(), box.y())
moveCommand.undo()
console.log('undo:', box.x(), box.y())
