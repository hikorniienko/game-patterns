import { Singleton } from './Singleton'

/**************************************************
 TEST CASES
**************************************************/

const singleton1 = new Singleton()
const singleton2 = new Singleton()

console.log('%c Design: Singleton ', 'background: pink; font-size: large')
console.log('singleton1 === singleton2:', singleton1 === singleton2)
console.log('singleton1.increment():', singleton1.increment())
console.log('singleton2.increment():', singleton2.increment())
console.log('singleton1.increment():', singleton1.increment())
console.log('singleton2.increment():', singleton2.increment())
