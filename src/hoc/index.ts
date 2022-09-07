import { Component as ComponentType } from '../utils/component';
import store, { StoreEvents } from '../store';
import { Indexed } from '../utils/types';
import { isEqual } from '../utils/is-equal';

export const connect = (mapStateToProps: (state: Indexed) => Indexed) => {
  // используем class expression
  return function (Component: typeof ComponentType) {
    return class extends Component {
      constructor(props) {
        super({ ...props, ...mapStateToProps(store.getState()) });
        let state = mapStateToProps(store.getState());

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    };
  };
};

function mapUserToProps(state) {
  return {
    name: state.user.name,
    avatar: state.user.avatar,
  };
}
