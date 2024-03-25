/**
 * Abstract Command class
 */
export abstract class Command {
  execute = (): void => {
    throw new Error('Command.execute() must be overridden')
  }

  undo = (): void => {
    throw new Error('Command.undo() must be overridden')
  }
}
