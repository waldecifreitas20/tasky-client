function save(key: string, value: any) {
  localStorage.setItem(key, value);
}

function remove(key: string) {
  localStorage.removeItem(key);
}

function get(key: string) {
  return localStorage.getItem(key);
}

export const Storage = {
  save,
  remove,
  get
}