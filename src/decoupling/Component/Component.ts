export class Component {
  public update = (object: any): void => {
    console.log('Component.update() must be overridden', object)
  }
}
