import React, { useState } from "react";
import FormInput from "../../../components/Form/FormInput";
import Button from "../../../components/Ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
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
      <form onSubmit={handleSubmit} id="form-login">
        <div className="form-group mb-20 ">
          <label for="email" className="mb-1">
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
        <div className="form-group mb-20 ">
          <label for="password" className="mb-1">
            Password
          </label>
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUnlockKeyhole} />
              </span>
            </div>
            <FormInput
              id="password"
              type="password"
              value={password}
              name="password"
              placeholder="Mật khẩu"
              onChange={handleInput("password")}
            />
          </div>
        </div>
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
          />
          <p className="or text-center fz-12px">Hoặc đăng nhập bằng</p>
        </div>
        <div className="login-social-list">
          {checked ? (
            <>
              <Button
                name={"Google"}
                bPad={"6px 12px"}
                bRad={".25rem"}
                bg={"#e73b2f"}
                color={"#fff"}
                width={"100%"}
                height={"40px"}
              />
              <Button
                name={"Facebook"}
                bPad={"6px 12px"}
                bRad={".25rem"}
                bg={"#1877f2"}
                color={"#fff"}
                width={"100%"}
                height={"40px"}
              />
              <Button
                name={"Linkedin"}
                bPad={"6px 12px"}
                bRad={".25rem"}
                bg={"#0a66c2"}
                color={"#fff"}
                width={"100%"}
                height={"40px"}
              />
            </>
          ) : (
            <>
              <Button
                name={"Google"}
                bPad={"6px 12px"}
                bRad={".25rem"}
                bg={"#e73b2f"}
                color={"#fff"}
                width={"100%"}
                height={"40px"}
                opacity={"0.65"}
                pointer={"none"}
              />
              <Button
                name={"Facebook"}
                bPad={"6px 12px"}
                bRad={".25rem"}
                bg={"#1877f2"}
                color={"#fff"}
                width={"100%"}
                height={"40px"}
                opacity={"0.65"}
                pointer={"none"}
              />
              <Button
                name={"Linkedin"}
                bPad={"6px 12px"}
                bRad={".25rem"}
                bg={"#0a66c2"}
                color={"#fff"}
                width={"100%"}
                height={"40px"}
                opacity={"0.65"}
                pointer={"none"}
              />
            </>
          )}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="d-flex align-items-start gap-2">
            <div className="pdt-2">
              <input
                id="agreement-social-login"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <label htmlFor="agreement-social-login"></label>
            </div>
            <p className="mb-0">
              <label for="agreement-social-login">
                Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và
                đồng ý với{" "}
                <Link
                  className="text-success"
                  to="https://www.topcv.vn/terms-of-service"
                  target="_blank"
                >
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link
                  className="text-success"
                  to="https://www.topcv.vn/dieu-khoan-bao-mat"
                  target="_blank"
                >
                  Chính sách bảo mật
                </Link>{" "}
                của TopCV
              </label>
            </p>
          </div>
        </div>
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
