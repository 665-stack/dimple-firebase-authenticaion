import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

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

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <p>user name: {user.displayName}</p>
      <p>user email: {user.email}</p>
      <img src={user.photoURL} alt="user img" />
    </div>
  );
}

export default App;
