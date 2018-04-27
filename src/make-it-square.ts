
export function makeItSquare(obj: Object, clear: boolean = false): Object {
  const cache: Object[] = [];

  return JSON.parse(JSON.stringify(obj, (key, value) => {
    key;

    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        if (clear) {
          return;
        } else {
          return '[Circular]';
        }
      }
      cache.push(value);
    }
    return value;
  }));
}
