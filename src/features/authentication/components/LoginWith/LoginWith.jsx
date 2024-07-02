import React, { useState } from "react";
import ButtonIcon from "../../../../components/Ui/ButtonIcon";
import {
  faGoogle,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function LoginWith() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <p className="or text-center fz-12px">Hoặc đăng nhập bằng</p>
      <div className="login-social-list">
        {checked ? (
          <>
            <ButtonIcon
              icon={faGoogle}
              name={"Google"}
              bPad={"6px 12px"}
              bRad={".25rem"}
              bg={"#e73b2f"}
              color={"#fff"}
              width={"100%"}
              height={"40px"}
            />
            <ButtonIcon
              icon={faFacebook}
              name={"Facebook"}
              bPad={"6px 12px"}
              bRad={".25rem"}
              bg={"#1877f2"}
              color={"#fff"}
              width={"100%"}
              height={"40px"}
            />
            <ButtonIcon
              icon={faLinkedin}
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
            <ButtonIcon
              icon={faGoogle}
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
            <ButtonIcon
              icon={faFacebook}
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
            <ButtonIcon
              icon={faLinkedin}
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
            <label htmlFor="agreement-social-login">
              Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và đồng
              ý với{" "}
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
    </>
  );
}
