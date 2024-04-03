/**
 * Update System
 */
export class UpdateSystem {
  private objects: UpdateObjectSystem[] = []

  public update = (): void => {
    this.objects = this.objects.filter((object) => !object.isRemoved())

    const length = this.objects.length
    for (let i = 0; i < length; i++) {
      this.objects[i].update()
    }
  }

  public add = (object: UpdateObjectSystem): void => {
    this.objects.push(object)
  }
}

export abstract class UpdateObjectSystem {
  public isRemoved = (): boolean => {
    console.error('RunnerObject.isRemoved() must be overridden')
    return false
  }

  public update = (): void => {
    console.error('RunnerObject.update() must be overridden')
  }
}
