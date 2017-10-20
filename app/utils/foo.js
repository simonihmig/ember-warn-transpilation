import { warn } from '@ember/debug';

export default function foo() {
  let name = 'foo';
  let args = ['foo'];
  warn(`you should not use ${name}`);
  warn(...args);
  return 'foo';
}
