import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../style/AddData.module.css";
import Modal from "../modals/ErrorModal";
import { SaveData } from "../utils/storage/DataStorage";
import {
  nameSurnameControl,
  countryControl,
  cityControl,
  emailControl,
} from "../utils/InputControls";

const AddData = () => {
  const [styleControl, setStyleControl] = useState(null);

  const [nameSurname, setNameSurname] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [email, setEmail] = useState(null);

  const [nameSurnameValue, setNameSurnameValue] = useState(null);
  const [countryValue, setCountryValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);

  let emailStyle = document.getElementById("email_id");
  let countryStyle = document.getElementById("country_id");
  let cityStyle = document.getElementById("city_id");
  let nameStyle = document.getElementById("name_id");
  let navigate = useNavigate();

  const defaultColor = "#686868";
  const errorColor = "rgba(255, 0, 0, 0.7)";

  const handleChangeNameSurname = (e) => {
    setNameSurname(nameSurnameControl(e.target.value));
    setNameSurnameValue(e.target.value);

    nameSurname ? setStyleControl(defaultColor) : setStyleControl(errorColor);

    nameStyle.style.color = `${styleControl}`;
  };
  const handleChangeCountry = (e) => {
    setCountry(countryControl(e.target.value));
    setCountryValue(e.target.value);

    country ? setStyleControl(defaultColor) : setStyleControl(errorColor);

    countryStyle.style.color = `${styleControl}`;
  };
  const handleChangeCity = (e) => {
    setCity(cityControl(e.target.value));
    setCityValue(e.target.value);

    city ? setStyleControl(defaultColor) : setStyleControl(errorColor);

    cityStyle.style.color = `${styleControl}`;
  };
  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
    setEmail(emailControl(e.target.value));

    email ? setStyleControl(defaultColor) : setStyleControl(errorColor);
    emailStyle.style.color = `${styleControl}`;
  };
  const addBtn = () => {
    let modal_root = document.getElementById("error-modal-root");
    let mixdata = { nameSurnameValue, countryValue, cityValue, emailValue };
    nameSurname && country && city && email ? SaveData(mixdata) : console.log();
    modal_root.style.visibility = "visible";
    window.location.reload();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.inputs_container}>
        <h2 className={style.title}>Makey Your Profile</h2>

        <div className={style.input_item}>
          <p id="name_id">Name Surname</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter name and surname"
            onChange={handleChangeNameSurname}
          />
        </div>

        <div className={style.input_item}>
          <p id="country_id">Country</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter a country"
            onChange={handleChangeCountry}
          />
        </div>

        <div className={style.input_item}>
          <p id="city_id">City</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter a city"
            onChange={handleChangeCity}
          />
        </div>

        <div className={style.input_item}>
          <p id="email_id">Email</p>
          <input
            className={style.input_class_farklı}
            type="text"
            placeholder="Enter a e-mail (abc@xyz.com)"
            onChange={handleChangeEmail}
          />
        </div>
        {email && city && country && nameSurname ? (
          <>
            <div className={style.add_btn} onClick={addBtn}>
              <p>Add</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {!(email && city && country && nameSurname) ? (
        <Modal
          nameSurname={nameSurname}
          country={country}
          city={city}
          email={email}
        />
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default AddData;
