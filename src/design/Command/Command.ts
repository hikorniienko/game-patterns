interface ICommand {
  execute: () => void
  undo: () => void
}

/**
 * Abstract Command class
 */
export abstract class Command implements ICommand {
  execute = (): void => {
    throw new Error('Command.execute() must be overridden')
  }

  undo = (): void => {
    throw new Error('Command.undo() must be overridden')
  }
}
