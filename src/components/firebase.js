import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBCpCpyxE3ZpLKEg_GkKug9O8yg3WkUtjM',
  authDomain: 'shanetestweb.firebaseapp.com',
  databaseURL: 'https://shanetestweb.firebaseio.com',
  projectId: 'shanetestweb',
  storageBucket: 'shanetestweb.appspot.com',
  messagingSenderId: '695532073842'

})

export const db = app.database()
export const dataRef = db.ref('data')
export const guitarsPartRef = db.ref('guitarsPart')
export const modelRef = db.ref('model')
export const bodyRef = db.ref('body')
export const neckRef = db.ref('neck')
export const pickguardRef = db.ref('pickguard')
export const electronicRef = db.ref('electronic')
export const colorRef = db.ref('color')
