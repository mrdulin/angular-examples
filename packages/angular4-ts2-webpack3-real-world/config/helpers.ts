import * as path from 'path';

const resolve = (...args: string[]) => path.resolve(__dirname, ...args);

export {
  resolve
};
