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
 * State Object System
 */
export abstract class StateObjectSystem {
  stateMachine: StateMachineSystem | null = null

  setStateMachine = (stateMachine: StateMachineSystem): void => {
    this.stateMachine = stateMachine
  }

  update = (): void => {
    this.stateMachine?.execute()
  }
}

/**
 * State Machine System
 */
export class StateMachineSystem {
  state: string
  states: Map<string, StateSystem>
  transitions: Map<string, string[]>

  constructor (initialState: string) {
    this.state = initialState
    this.states = new Map<string, StateSystem>()
    this.transitions = new Map<string, string[]>()
  }

  addState = (state: string, transitions: string[], stateSystem: StateSystem): void => {
    this.states.set(state, stateSystem)
    this.transitions.set(state, transitions)
  }

  removeState = (state: string): void => {
    this.states.delete(state)
    this.transitions.delete(state)
  }

  setState = (state: string): void => {
    if (this.state === state) return
    if (!this.isValidTransition(state)) return

    this.states.get(this.state)?.exit()
    this.state = state
    this.states.get(this.state)?.enter()
  }

  getState = (): string => {
    return this.state
  }

  isValidTransition = (state: string): boolean => {
    return (this.transitions.get(this.state) ?? []).includes(state)
  }

  execute = (): void => {
    this.states.get(this.state)?.execute()
  }
}
