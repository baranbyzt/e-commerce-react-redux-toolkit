import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import closeSvg from "../assets/svg/close.svg";
import style from "../style/ErrorModa.module.css";

const ErrorModal = ({ nameSurname, country, city, email }) => {
  let modal_root = document.getElementById("error-modal-root");

  let closeBtn = () => {
    modal_root.style.visibility = "hidden";
  };

  useEffect(() => {
    nameSurname && country && city && email == false
      ? (modal_root.style.visibility = "hidden")
      : (modal_root.style.visibility = "visible");
  }, [nameSurname, country, city, email]);

  return createPortal(
    <div id="close" className={style.modal}>
      <img onClick={closeBtn} className={style.close} src={closeSvg} />
      <p className={style.error_title}>you have Error Message</p>
      <div className={style.error_message}>
        <p>Error</p>
      </div>
      <div className={style.error_message_wrapper}>
        <p>{country ? null : "Country must be between 4 and 40"}</p>
        <p>{city ? null : "city must be between 4 and 40"}</p>
        <p>{email ? null : "email must be true"}</p>
        <p>{nameSurname ? null : "Name & Surname must be between 6 and 60"}</p>
      </div>
    </div>,
    document.getElementById("error-modal-root")
  );
};

export default ErrorModal;
