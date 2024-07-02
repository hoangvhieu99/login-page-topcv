import React, { useState } from "react";
import FormInput from "../../../components/Form/FormInput";
import Button from "../../../components/Ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import LoginWith from "./LoginWith/LoginWith";
import FormInputIcon from "../../../components/Form/FormInputIcon";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const { email, password } = formData;
  const handleInput = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.fullname = "Mời nhập Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email chưa đúng định dạng";
    }
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.fullname = "Mời nhập Password";
    } else if (formData.password < 6) {
      isValid = false;
      validationErrors.password = "Password phải lớn hơn 6 ký tự";
    }
    setErrors(validationErrors);
    setValid(isValid);
    axios
      .get("http://localhost:3000/users")
      .then((result) => {
        // result.data.map((user) => {
        const user = result.data.find((user) => user.email === formData.email);

        if (user) {
          bcrypt.compare(formData.password, user.password, (err, isMatch) => {
            if (isMatch) {
              toast.success("Login successful");
              navigate("/home");
            } else {
              toast.error("Invalid email or password");
            }
          });
        } else {
          toast.error("Invalid email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form id="form-login">
        <div className="form-group mb-20 ">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <FormInput
              id="email"
              type="text"
              value={email}
              name="Email"
              placeholder="Email"
              onChange={handleInput("email")}
            />
          </div>
        </div>
        <FormInputIcon password={password} handleInput={handleInput} />
        <div className="form-group mb-24  wrap-forgot-password">
          Quên mật khẩu
        </div>
        <div className="form-group mt-3">
          <Button
            name={"Đăng nhập"}
            icon=""
            bPad={"6px 12px"}
            bRad={".25rem"}
            bg={"#00b14f"}
            color={"#fff"}
            width={"100%"}
            height={"40px"}
            onClick={handleSubmit}
          />
        </div>
        <LoginWith />
      </form>
      <div className="mt-3 d-flex justify-content-around option-auth">
        <div>
          <span>Bạn chưa có tài khoản? </span>
          <Link to="sign-up" className="text-success">
            Đăng ký ngay
          </Link>
        </div>
      </div>
      <div className="mt-3 support text-center">
        <p className="fw-bold mb-0">Bạn gặp khó khăn khi tạo tài khoản?</p>
        <p className="mb-0">
          Vui lòng gọi tới số{" "}
          <a href="tel:(024) 6680 5588" className="hotline">
            (024) 6680 5588
          </a>
          (giờ hành chính).
        </p>
      </div>
    </div>
  );
}
