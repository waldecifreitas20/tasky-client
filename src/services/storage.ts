function save(key: string, value: any) {
  localStorage.setItem(key, value);
}

function remove(key: string) {
  localStorage.removeItem(key);
}

function get(key: string) {
  const data = localStorage.getItem(key);
  
  return !data ? null : data;
}

export const Storage = {
  save,
  remove,
  get
}