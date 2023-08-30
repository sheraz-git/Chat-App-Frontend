import "./App.css";
import SignupPage from "./pages/singup/SignupPage";
import OtpVerifyPage from "./pages/otpVerification/OtpVerifyPage";
import { Routes,Route } from "react-router-dom";
import Index from "./pages/Index";
function App() {

return (
    <>

<Routes>

<Route  path="/"  element={<SignupPage/>}  />  
<Route  path="/otpVerify"  element={<OtpVerifyPage />}  />  
<Route  path="/dashboard"  element={<Index />}  />  
  
</Routes>
    </>
  );
}

export default App;
