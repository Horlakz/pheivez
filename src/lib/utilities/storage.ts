import Cookie from "js-cookie";

export default class Storage {
  set(key: string, value: string) {
    Cookie.set(key, value, { expires: 1 });
  }

  get(key: string) {
    return Cookie.get(key);
  }

  check(key: string) {
    return Cookie.get(key) !== undefined;
  }

  remove(key: string) {
    Cookie.remove(key);
  }
}
