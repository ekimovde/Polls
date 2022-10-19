export function respondMockResult<T>(result: T, delayMs: number = RESPOND_MOCK_RESULT_DELAY): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, delayMs);
  });
}
