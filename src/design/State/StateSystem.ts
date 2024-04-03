/**
 * State System
 */
export abstract class StateSystem {
  enter = (): void => {
    throw new Error('StateSystem.enter() must be overridden')
  }

  exit = (): void => {
    throw new Error('StateSystem.exit() must be overridden')
  }

  execute = (): void => {
    throw new Error('StateSystem.execute() must be overridden')
  }
}

/**
 * State Subject System
 */
export abstract class StateSubjectSystem {
  protected stateMachine: StateMachineSystem | null = null

  public setStateMachine = (stateMachine: StateMachineSystem): void => {
    this.stateMachine = stateMachine
  }

  public update = (): void => {
    this.stateMachine?.execute()
  }
}

/**
 * State Machine System
 */
export class StateMachineSystem {
  protected state: string
  protected states: Map<string, StateSystem>
  protected transitions: Map<string, string[]>

  constructor (initialState: string) {
    this.state = initialState
    this.states = new Map<string, StateSystem>()
    this.transitions = new Map<string, string[]>()
  }

  public addState = (state: string, transitions: string[], stateSystem: StateSystem): void => {
    this.states.set(state, stateSystem)
    this.transitions.set(state, transitions)
  }

  public removeState = (state: string): void => {
    this.states.delete(state)
    this.transitions.delete(state)
  }

  public setState = (state: string): void => {
    if (this.state === state) return
    if (!this.isValidTransition(state)) return

    this.states.get(this.state)?.exit()
    this.state = state
    this.states.get(this.state)?.enter()
  }

  public getState = (): string => {
    return this.state
  }

  public isValidTransition = (state: string): boolean => {
    return (this.transitions.get(this.state) ?? []).includes(state)
  }

  public execute = (): void => {
    this.states.get(this.state)?.execute()
  }
}
