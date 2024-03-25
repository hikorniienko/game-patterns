/**
 * Observer
 */
export abstract class Observer {
  update = <I>(data: I): void => {
    console.log(data)
    throw new Error('Observer.update() must be overridden')
  }
}

/**
 * Observer Subject
 */
export class ObserverSubject {
  observers: Observer[]

  constructor () {
    this.observers = []
  }

  subscribe = (observer: Observer): void => {
    this.observers.push(observer)
  }

  unsubscribe = (observer: Observer): void => {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notify = <I>(data: I): void => {
    this.observers.forEach(observer => { observer.update<I>(data) })
  }
}
