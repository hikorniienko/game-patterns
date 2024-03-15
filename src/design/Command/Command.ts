interface ICommand {
  execute: () => void;
  undo: () => void;
}

export abstract class Command implements ICommand {
  execute = () => {
    throw new Error('Command.execute() must be overridden');
    return;
  };
  undo = () => {
    throw new Error('Command.undo() must be overridden');
    return;
  };
}
