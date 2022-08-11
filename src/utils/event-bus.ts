export class EventBus {
  listeners: { [event: string]: ((...args: string[]) => void)[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (...args: string[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event: string, callback: (...args: string[]) => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: string[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }
}
