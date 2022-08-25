import '../sign-in/LogIn.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const auth = getAuth();
  // const emailHandler = (e)=>{
  //     setEmail(e.target.value)
  // }

  const createUserWithEmailHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        alert("User account successfully created")
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

    //   reset form
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <form onSubmit={createUserWithEmailHandler}>
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
        <input
          required
          placeholder="Confirm Password"
          type={"password"}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
        />
        <button type="submit">Sign Up with Email & Password </button>
        <div>OR</div>
        <button>Sign Up with Google</button>
      </form>
    </>
  );
};

export default SignUp;
