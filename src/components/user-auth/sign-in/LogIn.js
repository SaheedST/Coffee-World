import "./LogIn.css";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googlePopupSignInHandler = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });
  };

  const emailAndPasswordSignInHandler = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("You have successfully signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <form onSubmit={emailAndPasswordSignInHandler}>
        <input
          required
          placeholder="Email"
          type={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          required
          placeholder="Password"
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />

        <button type="submit">Sign In</button>
      </form>
      <button onClick={googlePopupSignInHandler}>Continue with Google</button>
      <h2>Don't have an account yet?</h2>
      <Link to="/sign-up">
        <button>Sign Up</button>
      </Link>
    </>
  );
};

export default LogIn;
