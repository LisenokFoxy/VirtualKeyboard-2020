//localstorage
export function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export function get(name, substitute = null) {
  return JSON.parse(window.localStorage.getItem(name) || substitute);
}

export function del(name) {
  localStorage.removeItem(name);
}
