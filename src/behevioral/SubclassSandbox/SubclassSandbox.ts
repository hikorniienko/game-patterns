/**
 * Subclass Sandbox
 */
export class GameObject {
  constructor (public x: number, public y: number) {}

  update = (): void => {
    console.log('Updating game object...')
  }

  render = (): void => {
    console.log('Rendering game object...')
  }
}
