/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-types
export function consoleLogMethodCalls<T extends object>(target: T): T {
  const handler = {
    get(target: T, propKey: PropertyKey): unknown {
      const method = target[propKey];
      return function (...args) {
        if (!method) {
          return null;
        }

        const result = method.apply(this, args);

        if (result instanceof Promise) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          result.then(resolved => console.log(`${target.constructor.name}:${String(propKey)}`, args, resolved));
        } else {
          console.log(`${target.constructor.name}:${String(propKey)}`, args, result);
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return result;
      };
    }
  };

  return new Proxy(target, handler);
}
