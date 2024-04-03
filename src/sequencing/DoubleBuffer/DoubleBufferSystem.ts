/**
 * DoubleBuffer System
 */
export class DoubleBufferSystem {
  private currentBuffer: any[]
  private nextBuffer: any[]

  constructor () {
    this.currentBuffer = []
    this.nextBuffer = []
  }

  public addBuffer = (data: any): void => {
    this.nextBuffer.push(data)
  }

  public swapBuffer = (): void => {
    this.currentBuffer = this.nextBuffer
    this.nextBuffer = []
  }

  public getBuffer = (): any[] => {
    return this.currentBuffer
  }
}
