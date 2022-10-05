import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});

  // providers
  const googleProvider = new GoogleAuthProvider();

  // sign in
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  // sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="App">


      <button className='sign-in-button' onClick={handleGoogleSignIn}>Google Sign In</button>
      <button className='sign-out-button' onClick={handleSignOut}>Sign Out</button>

      <div className='user-info'>
        <p> name: {user.displayName}</p>
        <p> email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>

    </div>
  );
}

export default App;
