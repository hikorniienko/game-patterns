import { Command } from './Command';

/**************************************************
 MoveCommand
**************************************************/

export interface MoveCommandObject {
  move: (x: number, y: number) => void;
  x: () => number;
  y: () => number;
}

class MoveCommand<I extends MoveCommandObject> extends Command {
  obj: I;
  x: number;
  y: number;
  xBefore: number;
  yBefore: number;

  constructor(obj: I, x: number, y: number) {
    super();
    this.obj = obj;
    this.xBefore = obj.x();
    this.yBefore = obj.y();
    this.x = x;
    this.y = y;
  }

  execute = () => {
    this.obj.move(this.x, this.y);
  };

  undo = () => {
    this.obj.move(this.xBefore, this.yBefore);
  };
}

/**************************************************
 TEST CASES
**************************************************/

class Box implements MoveCommandObject {
  protected _x: number = 0;
  protected _y: number = 0;

  constructor() {}

  move = (x: number, y: number) => {
    this._x = x;
    this._y = y;
  };

  x = () => {
    return this._x;
  };

  y = () => {
    return this._y;
  };
}

const box = new Box();
const moveCommand = new MoveCommand<Box>(box, 10, 10);

moveCommand.execute();
console.log('execute:', box.x(), box.y());
moveCommand.undo();
console.log('undo:', box.x(), box.y());
