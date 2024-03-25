/**
 * Singleton
 */
export class Singleton {
  static instance: Singleton

  constructor () {
    if (typeof Singleton.instance === 'undefined') {
      Singleton.instance = this
    }

    return Singleton.instance
  }

  score = 0

  increment = (): number => {
    this.score++
    return this.score
  }
}
