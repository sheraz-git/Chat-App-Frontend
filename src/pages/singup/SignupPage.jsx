import React, { useState } from "react";
import style from "./signup.module.css";
import Text from "../../components/Text";
import { signupData } from "../../data";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import GoogleSvg from "../../assets/svgs/GoogleSvg";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../Redux/SignUp/signUpPage";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { tokenGenerator } from "../../tokenGenerator";
import { sendOtp } from "../../Redux/SignUp/signUpPage";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

const SignupPage = () => {
  // toast.success('hiiiiiiiiiiiii')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      try {
        const response = await dispatch(userSignUp(values.name, values.email, values.password));
        if (response?.response?.status === 409) {
        
          toast.error(response?.response.data.message)
       
        } else {
          const token = response.data.token;
          localStorage.setItem("token", token);
          const {userId}=tokenGenerator();
           toast.success(response.data.message)
      console.log(response.data.message);
          dispatch(sendOtp(userId));

          setTimeout(()=>{
          navigate("/otpVerify");
          },3000)

        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    },
  });
  const { handleChange, values, errors, touched, isValid, handleSubmit } =formik;
  return (
    <Container>
    <ToastContainer />
    
    <div className={style.main__container}>
      <div className={style.inner__container}>
        <div className={style.left__container}>
          <div className={style.overlay}></div>
        </div>
        <div className={style.right__container}>
          <div className={style.form__header}>
            <Text type={"h1"} label={"Create an account"} />
            <Text type={"h2"} label={"Lets get started with new Sign up."} />
          </div>
          <div className={style.form__section}>
            <form onSubmit={handleSubmit} className={style.form}>
            
                <div className="d-flex flex-column gap-3 ">
                  <Input
                    type={"text"}
                    placeholder={"Name"}
                    styleClass={"primary__input"}
                    name={"name"}
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                  <Input
                    type={"email"}
                    placeholder={"Email"}
                    styleClass={"primary__input"}
                    name={"email"}
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                  <Input
                    type={"password"}
                    placeholder={"Password"}
                    styleClass={"primary__input"}
                    name={"password"}
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                  {error && <div>{error}</div>}
                </div>
                <div className={style.button__container}>
                  {/* <Link to="/otpVerify"> */}{" "}
                  <Button
                    variant={"secondary"}
                    type="submit"
                    label={"Create Account"}
                    disabled={!isValid}
                  />{" "}
                  {/* </Link> */}
                  <Button
                    variant={"primary"}
                    label={"Sign up with google"}
                    svgIcon={<GoogleSvg />}
                  />
                </div>
            
              
            </form>
          </div>
          <div className={style.login__span}>
            <Text type={"h4"} label={"Already have an account?"} />
            <Link to={"/"}>
              <Text label={"Login"} type={"h2"} classData={"fw400"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};
export default SignupPage;
