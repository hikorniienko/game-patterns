import { Observer, ObserverSubject } from './Observer'

/**************************************************
 TEST CASES
**************************************************/

class Observer1 extends Observer {
  update = <I>(data: I): void => {
    console.log('Observer1:', data)
  }
}

class Observer2 extends Observer {
  update = <I>(data: I): void => {
    console.log('Observer2:', data)
  }
}

const subject = new ObserverSubject()
const observer1 = new Observer1()
const observer2 = new Observer2()

subject.subscribe(observer1)
subject.subscribe(observer2)

console.log('%c Design: Observer ', 'background: pink; font-size: large')

subject.notify<string>('Data for observers')
subject.unsubscribe(observer1)
subject.notify<string>('New data for observers')
