/**
 * Factory for creating flyweight objects.
 * @typeParam {I} - The type of the flyweight object.
 * @typeParam {V} - The type of the value of the flyweight object.
 */
export class FlyweightFactory<I, V> {
  protected Flyweight: new (value: V) => I
  protected flyweights: Map<V, I>

  /**
   * FlyweightFactory constructor
   * @constructor FlyweightFactory
   * @param {new (value: V) => I} Flyweight - The class of the flyweight object.
   */
  constructor (Flyweight: new (value: V) => I) {
    this.Flyweight = Flyweight
    this.flyweights = new Map()
  }

  /**
   * Get a flyweight object with the given value.
   * @method
   * @param {V} value - The value to associate with the flyweight object.
   * @returns {I} The flyweight object with the given value.
   */
  get = (value: V): I => {
    if (!this.flyweights.has(value)) {
      this.flyweights.set(value, new this.Flyweight(value))
    }
    return this.flyweights.get(value) as I
  }

  /**
   * Get the number of flyweight objects.
   * @method
   * @returns {number} The number of flyweight objects.
   */
  count = (): number => {
    return this.flyweights.size
  }
}
