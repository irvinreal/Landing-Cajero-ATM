function setAutoLogout(miliseconds: number) {
  console.log('start')
  setInterval(() => {
    console.log('time')
  }, 1000)
  setTimeout(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
    console.log('Session expired.')
  }, miliseconds)
}

export default function setCookies(token: string, userId: string) {
  const remainingMilliseconds = 5 * 60 * 1000
  const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
  console.log(localStorage.getItem('token'))
  console.log(localStorage.getItem('userId'))
  if (!localStorage.getItem('token')) localStorage.setItem('token', token)
  if (!localStorage.getItem('userId')) localStorage.setItem('userId', userId)
  if (!localStorage.getItem('expiryDate'))
    localStorage.setItem('expiryDate', expiryDate.toISOString())

  return setAutoLogout(remainingMilliseconds)
}
