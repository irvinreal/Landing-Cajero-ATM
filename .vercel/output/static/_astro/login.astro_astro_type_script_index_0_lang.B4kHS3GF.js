import { n as u } from './router.hIIS2Ntx.js'
import { U as m } from './constants.CezUMVIU.js'
function g(a) {
  console.log('start'),
    setInterval(() => {
      console.log('time')
    }, 1e3),
    setTimeout(() => {
      localStorage.removeItem('token'),
        localStorage.removeItem('expiryDate'),
        localStorage.removeItem('userId'),
        console.log('Session expired.')
    }, a)
}
function f(a, o) {
  const t = new Date(new Date().getTime() + 3e5)
  return (
    console.log(localStorage.getItem('token')),
    console.log(localStorage.getItem('userId')),
    localStorage.getItem('token') || localStorage.setItem('token', a),
    localStorage.getItem('userId') || localStorage.setItem('userId', o),
    localStorage.getItem('expiryDate') ||
      localStorage.setItem('expiryDate', t.toISOString()),
    g(3e5)
  )
}
let n = [],
  i = 0
const s = 4
let d = a => {
    let o = [],
      e = {
        get() {
          return e.lc || e.listen(() => {})(), e.value
        },
        lc: 0,
        listen(t) {
          return (
            (e.lc = o.push(t)),
            () => {
              for (let r = i + s; r < n.length; )
                n[r] === t ? n.splice(r, s) : (r += s)
              let l = o.indexOf(t)
              ~l && (o.splice(l, 1), --e.lc || e.off())
            }
          )
        },
        notify(t, l) {
          let r = !n.length
          for (let c of o) n.push(c, e.value, t, l)
          if (r) {
            for (i = 0; i < n.length; i += s) n[i](n[i + 1], n[i + 2], n[i + 3])
            n.length = 0
          }
        },
        off() {},
        set(t) {
          let l = e.value
          l !== t && ((e.value = t), e.notify(l))
        },
        subscribe(t) {
          let l = e.listen(t)
          return t(e.value), l
        },
        value: a
      }
    return e
  },
  I = (a = {}) => {
    let o = d(a)
    return (
      (o.setKey = function (e, t) {
        let l = o.value
        typeof t > 'u' && e in o.value
          ? ((o.value = { ...o.value }), delete o.value[e], o.notify(l, e))
          : o.value[e] !== t &&
            ((o.value = { ...o.value, [e]: t }), o.notify(l, e))
      }),
      o
    )
  }
const S = { clientName: '', amount: 0 },
  p = I(S),
  v = document.getElementById('client-form')
v?.addEventListener('submit', async a => {
  a.preventDefault()
  const o = new FormData(a.target),
    e = Object.fromEntries(o.entries())
  try {
    const t = await fetch(m.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(e)
      }),
      l = await t.json()
    console.log(t),
      t.ok &&
        (console.log(l),
        f(l.token, l.userId),
        p.setKey('clientName', 'juan'),
        u('/my-account'))
  } catch (t) {
    console.log(t)
  }
})
