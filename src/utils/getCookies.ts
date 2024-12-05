export default function getCookies() {
  return {
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
  }
}
