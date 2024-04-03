/**
 * GameLoop
 */
export class GameLoop {
  private readonly frame: (timestamp: number) => void
  private frameMS: number = 1000 / 60
  private requestId: number | null = null
  private lastTime: number = 0

  constructor (update: () => void) {
    this.frame = (time: number): void => {
      const elapsedMS = time - this.lastTime

      if (elapsedMS >= this.frameMS) {
        update()
        this.lastTime = time - (elapsedMS % this.frameMS)
      }

      this.requestId = requestAnimationFrame(this.frame)
    }
  }

  start = (): void => {
    if (this.requestId === null) {
      this.requestId = requestAnimationFrame(this.frame)
    }
  }

  stop = (): void => {
    if (this.requestId !== null) {
      cancelAnimationFrame(this.requestId)
      this.requestId = null
    }
  }

  setFPS = (fps: number): void => {
    this.frameMS = 1000 / fps
  }
}
