import { MMKV } from "react-native-mmkv";

const _mmkvStorage = new MMKV();

function getItem<T>(key: string): T | null {
  const value = _mmkvStorage.getString(key);
  return value ? JSON.parse(value) : null;
}

function setItem<T>(key: string, value: T): void {
  _mmkvStorage.set(key, JSON.stringify(value));
}

function removeItem(key: string): void {
  _mmkvStorage.delete(key);
}

function clearAll(): void {
  _mmkvStorage.clearAll();
}

export const MMKVStorage = {
  getItem,
  setItem,
  removeItem,
  clearAll,
};
