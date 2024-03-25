/**
 * Factory for creating flyweight objects.
 */
export class FlyweightFactory<I, V> {
  protected Flyweight: new (value: V) => I
  protected flyweights: Map<V, I>

  constructor (Flyweight: new (value: V) => I) {
    this.Flyweight = Flyweight
    this.flyweights = new Map()
  }

  get = (value: V): I => {
    if (!this.flyweights.has(value)) {
      this.flyweights.set(value, new this.Flyweight(value))
    }
    return this.flyweights.get(value) as I
  }

  count = (): number => {
    return this.flyweights.size
  }
}
