export default class Storage {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  check(key: string) {
    return localStorage.getItem(key) !== null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
