import { EventBus } from '../utils/event-bus';
import { set } from '../utils/set';

export enum StoreEvents {
  Updated = 'updated',
}

export abstract class BaseStore {
  public static eventBus = new EventBus();

  public set(path: string, value: unknown) {
    set(this, path, value);

    BaseStore.eventBus.emit(StoreEvents.Updated, this);
  }
}
