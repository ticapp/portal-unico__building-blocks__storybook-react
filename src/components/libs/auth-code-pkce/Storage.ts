import { MemoryStorage } from './MemoryStorage';

export class Storage {
  private storage;

  constructor() {
    this.storage = typeof window !== 'undefined' ? window.localStorage : new MemoryStorage();
  }

  getItem = (key: string): string | null => {
    return this.storage.getItem(key);
  };

  setItem = (key: string, value: string) => {
    this.storage.setItem(key, value);
  };

  removeItem = (key: string) => {
    this.storage.removeItem(key);
  };

  clear = () => {
    this.storage.clear();
  };
}
