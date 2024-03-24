import { Flyweight } from './Flyweight'
import { FlyweightFactory } from './FlyweightFactory'

/**************************************************
 TEST CASES
**************************************************/
class Context {
  value: string
  flyweight: Flyweight

  constructor (value: string, flyweight: Flyweight) {
    this.value = value
    this.flyweight = flyweight
  }
}

const flyweightFactory = new FlyweightFactory<Flyweight, string>(Flyweight)

const contexts = []
contexts.push(new Context('foo', flyweightFactory.get('foo')))
contexts.push(new Context('bar', flyweightFactory.get('bar')))
contexts.push(new Context('foo', flyweightFactory.get('foo')))
contexts.push(new Context('foo', flyweightFactory.get('foo')))

console.log('%c Design: Flyweight ', 'background: pink; font-size: large')
console.log('context count:', contexts.length)
console.log('flyweight count:', flyweightFactory.count())
