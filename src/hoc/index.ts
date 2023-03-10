import { Component } from '../utils/component';

import { Indexed } from '../utils/types';
import newStore from '../store/new-store';
import { StoreEvents } from '../store/new-store';

export default function connect(Component, mapStateToProps) {
  return class extends Component {
    constructor(tag, props = {}) {
      const store = new newStore();

      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.attach(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
