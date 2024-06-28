import React from "react";
// import Authentication from "../features/authentication";
import SignupForm from "../features/authentication/components/SignupForm";

export default function Signup() {
  return (
    <div className="wrap-auth-section">
      <div className="auth">
        <div className="auth-inner">
          <div className="auth-form">
            <div className="header">
              <h2 className="title">Chào mừng bạn đã quay trở lại</h2>
              <div className="text-muted caption">
                Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự
                nghiệp lý tưởng
              </div>
            </div>
            <SignupForm />
          </div>
        </div>
        <p className="auth-copy-right">
          © 2016. All Rights Reserved. TopCV Vietnam JSC.
        </p>
      </div>
      <div className="bg-right">
        <div className="bg-right-abs">
          <h1 className="mt-4">Tiếp lợi thế Nối thành công</h1>
          <p>
            TopCV - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ tại Việt
            Nam
          </p>
        </div>
        <div className="bg-right-arrow"></div>
        <a className="bg-right-link" href="https://www.topcv.vn?ref=you"></a>
      </div>
    </div>
  );
}
