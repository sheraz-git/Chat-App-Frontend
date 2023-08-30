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
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { tokenGenerator } from "../../tokenGenerator";
import { sendOtp } from "../../Redux/SignUp/signUpPage";

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

const SignupPage = () => {
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
    onSubmit: async (values) => {
      try {
        const response = await dispatch(userSignUp(values.name, values.email, values.password));
        if (response.response?.status === 409) {
          setError("Email already exists");
        } else {
          const token = response.data.token;
          localStorage.setItem("token", token);
          const {userId}=tokenGenerator();
          dispatch(sendOtp(userId));
          navigate("/otpVerify");
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    },
  });
  const { handleChange, values, errors, touched, isValid, handleSubmit } =formik;
  return (
    <Container>
      <div className={style.container}>
        <div className={style.left__container}>
          <img src="/photos/signBack.png" alt="" />
          <div className={style.welcome__note}>
            <Text type={"h3"} label={signupData.heading} />
            <Text
              type={"h3"}
              classData={"fw400"}
              label={signupData.subheading}
            />
          </div>
        </div>
        <div className={style.signup__form}>
          <div className={style.form__container}>
            <div className={style.form__heading}>
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
          </div>

          <div className={style.already__account}>
            <Text
              type={"h5"}
              label={"Already have an account?"}
              classData={""}
            />
            <Text type={"h2"} label={"Link"} classData={"fw4000"} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SignupPage;
