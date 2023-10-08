import { init } from 'next-firebase-auth'


// https://www.youtube.com/watch?v=8qUFkX-8gAE


const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'meneadev',
        clientEmail: 'firebase-adminsdk-qdn79@meneadev.iam.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }
    },
    firebaseClientInitConfig: {
        apiKey: "AIzaSyBMG4ZCxqfouEVtpaBpZMX2zft93XMkpoM",
        authDomain: "vidrioku.firebaseapp.com",
        projectId: "vidrioku",
        storageBucket: "vidrioku.appspot.com",
        messagingSenderId: "851068508296",
        appId: "1:851068508296:web:81701cd961f40ecf70e73d",
    },
    
    cookies: {
      name: 'midu-cookie-app', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth