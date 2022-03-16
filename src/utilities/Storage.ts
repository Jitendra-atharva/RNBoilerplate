
import { StorageProvider } from '../framework';


export async function setStorageData(key: string, data: any) {
  if (key && data) {
    await StorageProvider.set(key, data);
  }
}

export async function getStorageData(key: string, parseToJson: boolean = false) {
  if (StorageProvider && key) {
    const data = await StorageProvider.get(key) || null;
    if (parseToJson && data) {
      return JSON.parse(data)
    } else {
      return data;
    }
  }
  return null;
}

export async function removeStorageData(key: string) {
  if (StorageProvider && key) {
    await StorageProvider.remove(key);
  }
}

