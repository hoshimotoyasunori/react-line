import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Line from './components/Line';
import SignIn from './components/SignIn';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ?  <Line  /> : <SignIn /> }
    </div>
  );
}

export default App;
