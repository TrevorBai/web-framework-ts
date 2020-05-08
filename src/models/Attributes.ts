export class Attributes<T> {
  constructor(private data: T) {}

  // Arrow function always binds this
  get = <K extends keyof T>(key: K): T[K] => { // K is constrained to be one of keyof T 
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
