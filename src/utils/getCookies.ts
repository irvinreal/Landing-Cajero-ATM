import { localStorageGetItem } from "./localStorageGetItem"

export default function getCookies() {
  return {
    token: localStorageGetItem('token'),
    userId: localStorageGetItem('userId'),
  }
}
