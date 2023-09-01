import React, { useState } from "react";
import Text from "../../components/Text";
import style from "./otpVerify.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../Redux/SignUp/signUpPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OtpVerifyPage = () => {
  const [otp, setOtp] = useState('');
  const [error,setError]=useState('');
  const dispatch=useDispatch();
  let navigate=useNavigate()

  const handleChange = (event) => {
    let { value } = event.target;
    value = value.replace(/[^0-9]/g, "").slice(0, 6);
    setOtp(value);
  };

  const handleVerify = async() => {
 
    const response=await dispatch(verifyOtp(otp));
    
    if (response.status === 200) {
   
  
      toast.success(response.data.message)
    
      setTimeout(() => {
           navigate("/login");
      }, 2000);
    } else {
     console.log(response,"errrrrrrrrrrrrrrrrrrrrrrrrrr");
      toast.error(response.response.data.message)

      // toast.error(response.data.message)
      // const {userId}=tokenGenerator();
      // dispatch(sendOtp(userId));
      // navigate("/otpVerify");
    }

  }
  return (
    <div className={style.mainContainer}>
    <ToastContainer/>
      <div className={style.centerContainer}>
        <div className={style.upperContainer}>
          <Text type={"h1"} label={"Verify Email Address"} />
          <Text
            type={"h2"}
            label={"Please enter the OTP We've send to"}
            classData={"h2.fw500"}
          />
        </div>
        <div className={style.lowerContainer}>
          <Text type={"h2"} label={"OTP"} classData={"h2.fw500"} />
          <div className={style.otp__container}>
    <Input type={"text"} placeholder={""} styleClass={"otp__input"} value={otp} onChange={handleChange} />
          </div>
    {error && <div>{error}</div>}
          <div className={style.resend__otp}>
            <span>Resend OTP</span>
          </div>
          <div className={style.verify__btn}>
            <Button label={"verify"} variant={"secondary"} onClick={handleVerify} type="button"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerifyPage;
