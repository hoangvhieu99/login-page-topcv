import React, { useState } from "react";
import FormInput from "../../../components/Form/FormInput";
import Button from "../../../components/Ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUnlockKeyhole,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const { fullname, email, password, cpassword } = formData;
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const [checked, setChecked] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const navigate = useNavigate();
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  const handleChange = () => {
    setChecked(!checked);
  };
  const handleInput = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};
    if (formData.fullname === "" || formData.fullname === null) {
      isValid = false;
      validationErrors.fullname = "Mời nhập Họ và tên";
    }
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
    if (formData.cpassword !== formData.password) {
      isValid = false;
      validationErrors.cpassword = "Không trùng khớp với password";
    }
    setErrors(validationErrors);
    setValid(isValid);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3000/users", formData)
        .then((result) => {
          toast.error("Registered successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
    setFormData({
      fullname: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <div className="login">
      {valid ? (
        <></>
      ) : (
        <div>
          {errors.fullname} {errors.email} {errors.password} {errors.cpassword}
        </div>
      )}
      <form onSubmit={handleSubmit} id="form-login">
        <div className="form-group mb-20 ">
          <label for="fullname" className="mb-1">
            Họ và tên
          </label>
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <FormInput
              id="fullname"
              type="text"
              value={fullname}
              name="fullname"
              placeholder="Họ và tên"
              onChange={handleInput("fullname")}
            />
          </div>
        </div>
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
              name="email"
              placeholder="Email"
              onChange={handleInput("email")}
            />
          </div>
        </div>
        <div className="form-group mb-20 ">
          <label for="password" className="mb-1">
            Mật khẩu
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
              placeholder="Nhập mật khẩu"
              onChange={handleInput("password")}
            />
          </div>
        </div>
        <div className="form-group mb-20 ">
          <label for="cpassword" className="mb-1">
            Xác nhận mật khẩu
          </label>
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUnlockKeyhole} />
              </span>
            </div>
            <FormInput
              id="cpassword"
              type="password"
              value={cpassword}
              name="cpassword"
              placeholder="Nhập lại mật khẩu"
              onChange={handleInput("cpassword")}
            />
          </div>
        </div>
        <div className="form-group mb-0 ">
          <div className="d-flex align-items-start gap-2">
            <div className="pdt-2">
              <input
                type="checkbox"
                id="checksignup"
                checked={isChecked}
                onChange={handleChecked}
              />
              <label htmlFor="checksignup"></label>
            </div>
            <p className="mb-0">
              <label for="agreement-social-login">
                Tôi đã đọc và đồng ý với
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

        <div className="form-group mt-3">
          {isChecked ? (
            <Button
              name={"Đăng ký"}
              bPad={"6px 12px"}
              bRad={".25rem"}
              bg={"#00b14f"}
              color={"#fff"}
              width={"100%"}
              height={"40px"}
            />
          ) : (
            <Button
              name={"Đăng ký"}
              bPad={"6px 12px"}
              bRad={".25rem"}
              bg={"#00b14f"}
              color={"#fff"}
              width={"100%"}
              height={"40px"}
              opacity={"0.65"}
              pointer={"none"}
            />
          )}
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
          <span>Bạn đã có tài khoản? </span>
          <Link to="/" className="text-success">
            Đăng nhập ngay
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
