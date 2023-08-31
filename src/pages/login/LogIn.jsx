import React, { useState } from "react";
import style from "./login.module.css";
import Text from "../../components/Text";
import { signupData } from "../../data";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import GoogleSvg from "../../assets/svgs/GoogleSvg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

const LogIn = () => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  const { handleChange, values, errors, touched, isValid, handleSubmit } = formik;

  return (
    <Container>
      <ToastContainer />

      <div className={style.container}>
        <div className={style.left__container}>
          <img src="/photos/signBack.png" alt="" />
          <div className={style.welcome__note}>
            <Text type={"h3"} label={signupData.heading} />
            <Text type={"h3"} classData={"fw400"} label={signupData.subheading} />
          </div>
        </div>
        <div className={style.signup__form}>
          <div className={style.form__container}>
            <div className={style.form__heading}>
              <Text type={"h1"} label={"Welcome back!"} />
              <Text type={"h2"} label={"Please enter your details."} />
            </div>
            <div className={style.form__section}>
              <form onSubmit={handleSubmit} className={style.form}>
                <div className="d-flex flex-column gap-3 ">
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
                  <Button
                    variant={"secondary"}
                    type="submit"
                    label={"Login "}
                    disabled={!isValid}
                  />
                  <Button
                    variant={"primary"}
                    label={"Login with google"}
                    svgIcon={<GoogleSvg />}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className={style.already__account}>
            <Text type={"h5"} label={"Already have an account?"} classData={""} />
            <Link className={style.signup_link}>Signup</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;