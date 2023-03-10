import Store from './Store';
import { Component as BaseComponent } from '../../utils/component';
import { Indexed } from '../../utils/types';

export default function connect(
  Component: typeof BaseComponent,
  mapStateToProps: (state: Indexed) => Indexed
) {
  return class extends Component {
    constructor(tag: string, props = {}) {
      const store = new Store();

      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
