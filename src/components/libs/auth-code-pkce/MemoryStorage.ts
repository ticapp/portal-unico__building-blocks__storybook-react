export class MemoryStorage {
  private data: Map<string, string>;

  constructor() {
    this.data = new Map();
  }

  getItem = (key: string): string | null => {
    const i = this.data.get(key);
    return i || null;
  };

  setItem = (key: string, value: string) => {
    this.data.set(key, value);
  };

  removeItem = (key: string) => {
    this.data.delete(key);
  };

  clear = () => {
    this.data.clear();
  };
}
