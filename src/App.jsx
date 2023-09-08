import "./App.css";
import SignUpPage from "./pages/singup/SignUpPage";
//import OtpVerifyPage from "./pages/otpVerification/OtpVerifyPage";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signIn/SignInPage";
import ChatBox from "./components/chatbox/ChatBox";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Routes>
        {/* hello  */}
        <Route path="/" element={<SignUpPage />} />
        {/* <Route path="/otpVerify" element={<OtpVerifyPage />} /> */}
        <Route path="/login" element={<SignInPage />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="/load" element={<Loader />} />

      </Routes>
    </>
  );
}

export default App;
