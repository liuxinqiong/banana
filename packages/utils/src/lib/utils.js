export function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}

export function isEqual(a, b) {
  return a === b;
}

export function mutObject(o) {
  o.name = 'good';
}
