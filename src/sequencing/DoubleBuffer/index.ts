import { DoubleBufferSystem } from './DoubleBufferSystem'

/**************************************************
 TEST CASES
**************************************************/

const doubleBufferSystem = new DoubleBufferSystem()
doubleBufferSystem.addBuffer('Data 1-1')
doubleBufferSystem.addBuffer('Data 2-1')
doubleBufferSystem.addBuffer('Data 3-1')

console.log('%c Sequencing: DoubleBuffer ', 'background: pink; font-size: large')
console.log('currentBuffer:', doubleBufferSystem.getBuffer().toString())

doubleBufferSystem.swapBuffer()

console.log('currentBuffer:', doubleBufferSystem.getBuffer().toString())

doubleBufferSystem.addBuffer('Data 1-2')
doubleBufferSystem.addBuffer('Data 2-2')
doubleBufferSystem.addBuffer('Data 3-2')

doubleBufferSystem.swapBuffer()

console.log('currentBuffer:', doubleBufferSystem.getBuffer().toString())
