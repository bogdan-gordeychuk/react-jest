export function countdown(seconds: number, callback: () => void): void {
  setTimeout(() => {
    callback()
  }, seconds * 1000)
}