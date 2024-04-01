/**
 * DoubleBuffer class
 */
export class DoubleBuffer {
  currentBuffer: any[]
  nextBuffer: any[]

  constructor () {
    this.currentBuffer = []
    this.nextBuffer = []
  }

  addBuffer = (data: any): void => {
    this.nextBuffer.push(data)
  }

  swapBuffer = (): void => {
    this.currentBuffer = this.nextBuffer
    this.nextBuffer = []
  }

  getBuffer = (): any[] => {
    return this.currentBuffer
  }
}
