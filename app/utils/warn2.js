import Ember from 'ember';
const { warn: emberWarn } = Ember;

export default function warn2() {
  emberWarn(...arguments);
}
