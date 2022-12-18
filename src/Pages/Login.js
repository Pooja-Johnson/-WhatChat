import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

const firebaseConfig = {
  apiKey: "AIzaSyB1a4zIyfkPgRNSe7GsNvy4mk-HAtHLcUY",
  authDomain: "whatchat-eb1e2.firebaseapp.com",
  projectId: "whatchat-eb1e2",
  storageBucket: "whatchat-eb1e2.appspot.com",
  messagingSenderId: "600117262466",
  appId: "1:600117262466:web:7421190983248b302d9c9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Login() {

  const navigate = useNavigate()
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle=>{signInWithPopup(auth, provider)
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
