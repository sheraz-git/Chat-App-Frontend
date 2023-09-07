import "./App.css";
import SignupPage from "./pages/singup/SignupPage";
import OtpVerifyPage from "./pages/otpVerification/OtpVerifyPage";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/login/LogIn";
import ChatBox from "./components/chatbox/ChatBox";

function App() {
  return (
    <>
      <Routes>
        {/* ubuntu se dbra kia */}
        <Route path="/" element={<SignupPage />} />
        <Route path="/otpVerify" element={<OtpVerifyPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </>
  );
}

export default App;
