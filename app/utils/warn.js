import { warn as emberWarn } from '@ember/debug';

export default function warn() {
  emberWarn(...arguments);
}
