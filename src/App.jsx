import "./App.css";
import SignupPage from "./pages/singup/SignupPage";
import OtpVerifyPage from "./pages/otpVerification/OtpVerifyPage";
import { Routes,Route } from "react-router-dom";
import LogIn from "./pages/login/LogIn";
function App() {

return (
    <>

<Routes>
<Route  path="/"  element={<SignupPage/>}  />  
<Route  path="/otpVerify"  element={<OtpVerifyPage />}  />  
<Route  path="/login"  element={<LogIn/>}  />  
  
</Routes>
    </>
  );
}

export default App;
