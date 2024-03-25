/**
 * Clone
 */
export class Clone {
  clone = (): this => {
    return Object.create(this)
  }
}
