import { DoubleBuffer } from './DoubleBuffer'

/**************************************************
 TEST CASES
**************************************************/

const doubleBuffer = new DoubleBuffer()
doubleBuffer.addBuffer('Data 1-1')
doubleBuffer.addBuffer('Data 2-1')
doubleBuffer.addBuffer('Data 3-1')

console.log('%c Sequencing: DoubleBuffer ', 'background: pink; font-size: large')
console.log('currentBuffer:', doubleBuffer.getBuffer().toString())

doubleBuffer.swapBuffer()

console.log('currentBuffer:', doubleBuffer.getBuffer().toString())

doubleBuffer.addBuffer('Data 1-2')
doubleBuffer.addBuffer('Data 2-2')
doubleBuffer.addBuffer('Data 3-2')

doubleBuffer.swapBuffer()

console.log('currentBuffer:', doubleBuffer.getBuffer().toString())
