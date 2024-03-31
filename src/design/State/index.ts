import { StateMachineSystem } from './StateSystem'
import { Player, PlayerState } from './Player'

/**************************************************
 TEST CASES
**************************************************/

const player = new Player()

const playerStateMachine = new StateMachineSystem('idle')
playerStateMachine.addState('idle', ['walk', 'jump'], new PlayerState('idle', player))
playerStateMachine.addState('walk', ['idle'], new PlayerState('walk', player))
playerStateMachine.addState('jump', ['idle'], new PlayerState('jump', player))

player.setStateMachine(playerStateMachine)

console.log('%c Design: StateSystem ', 'background: pink; font-size: large')
console.log('currentState:', playerStateMachine.getState())

playerStateMachine.setState('walk')
player.update()

playerStateMachine.setState('idle')
player.update()

playerStateMachine.setState('jump')
player.update()

playerStateMachine.setState('idle')
player.update()

console.log('currentState:', playerStateMachine.getState())
