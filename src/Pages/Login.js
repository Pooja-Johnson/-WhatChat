
import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import app from "../store/Config";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Login() {

  const navigate = useNavigate()
  return (
    <div className="App">
      <button className="login-with-google-btn" onClick={signInWithGoogle=>{signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      navigate('/parse')
    }).catch((error)=>{
      alert(error.message)
      })}
    }>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
