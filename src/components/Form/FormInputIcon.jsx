import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
export default function FormInputIcon({ password, handleInput }) {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className="form-group mb-20 ">
      <label htmlFor="password" className="mb-1">
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
          type={show ? "text" : "password"}
          value={password}
          name="password"
          placeholder="Mật khẩu"
          onChange={handleInput("password")}
        />
        <div className="input-group-prepend">
          <button
            onClick={toggleShow}
            className={
              show
                ? "input-group-text toggle-password show"
                : "input-group-text toggle-password"
            }
          ></button>
        </div>
      </div>
    </div>
  );
}
