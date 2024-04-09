import { Component } from './Component'

/**************************************************
 TEST CASES
**************************************************/

class PlayerUpdateComponent extends Component {
  update = (object: GameObject): void => {
    object.position.x += 1
    console.log('Player update position x: ', object.position.x)
  }
}

class PlayerRenderComponent extends Component {
  update = (): void => {
    console.log('Render player...')
  }
}

class GameObject {
  position: { x: number, y: number } = { x: 0, y: 0 }
  _removed: boolean = false
  _dirty: boolean = false

  constructor (protected updateComponent: Component, protected renderComponent: Component) {
  }

  isRemoved = (): boolean => {
    return this._removed
  }

  isNotDirty = (): boolean => {
    return this._dirty
  }

  update = (): void => {
    if (this.isNotDirty()) return
    this.updateComponent.update(this)
  }

  render = (): void => {
    if (this.isNotDirty()) return
    this.renderComponent.update(this)
  }
}

console.log('%c Decoupling: Component ', 'background: pink; font-size: large')

const player = new GameObject(new PlayerUpdateComponent(), new PlayerRenderComponent())
player.update()
player.render()
player.update()
player.render()
player.update()
player.render()
