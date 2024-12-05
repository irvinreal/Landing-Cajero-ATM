export default function setCookies() {
  localStorage.removeItem('token')
  localStorage.removeItem('expiryDate')
  localStorage.removeItem('userId')
  console.log('Logged out.')
}
