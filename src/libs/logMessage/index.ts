export function logMessage(
  logger: (message: string) => void,
  message: string
): void {
  logger(message);
}
