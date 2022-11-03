import React, { Component } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Input from "./common/input";
import { registerParticipant } from "../services/participantService";
import mail from "./images/web-m.jpg";
import path from "./images/babak.jpg";

class Conference extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      phone: "",
    },
    errors: {},
    registrationId: "",
  };

  schema = {
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(30),
    email: Joi.string().email().max(96),
    organisation: Joi.string().max(256),
    phone: Joi.string().max(25),
  };

  componentDidMount() {
    const registrationId = localStorage.getItem("registrationId");
    this.setState({ registrationId });
  }

  handleNewRegistration = () => {
    localStorage.removeItem("registrationId");
    const account = {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      phone: "",
    };
    const registrationId = "";
    this.setState({ account, registrationId });
  };

  translateErrorMessage = (errors, i) => {
    if (i === "email") errors[i] = "Моля, въведете валиден e-mail.";
    else if (i === "emailRegistered")
      errors.email = "Този e-mail вече е регистриран.";
    else if (i === "organisation")
      errors[i] =
        "Моля, въведете организация или интересите, които Ви мотивират да участвате. (макс. 256 символа)";
    else errors[i] = "Полето не може да бъде празно.";
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].path[0] : null;
  };

  handleChange = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    const errorKey = this.validateProperty(input);
    if (errorKey) errors = this.translateErrorMessage(errors, errorKey);
    else delete errors[input.name];

    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!result.error || result.error.details[0].path[0] === "phone")
      return null;
    let errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        errors = this.translateErrorMessage(errors, item.path[0]);
      }
    }
    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    try {
      const { data } = await registerParticipant(this.state.account);
      let registrationId = this.state.registrationId;
      registrationId = data;
      this.setState({ registrationId });

      localStorage.setItem("registrationId", registrationId);
    } catch (ex) {
      let errors = {};
      if (ex.response && ex.response.status === 400) {
        for (let item in ex.response.data.errors) {
          errors = this.translateErrorMessage(errors, item);
        }
      }
      this.setState({ errors: errors || {} });
    }
  };

  renderInput = (name, label, value) => {
    return (
      <Input
        name={name}
        type="text"
        label={label}
        value={value}
        onChange={this.handleChange}
        errors={this.state.errors}
      />
    );
  };

  render() {
    const { firstName, lastName, email, organisation, phone } =
      this.state.account;
    return (
      <div>
        <img src={path} alt="Bicycle path" className="image_path" />
        <div className="form_container">
          <h2 className="align_center">Национална велосипедна конференция</h2>
          <div className="text">
            <br />
            На 3 ноември 2022 в зала 10 на НДК от 09:00 ч. се проведе Национална велосипедна конференция, която събрa заинтересовани страни в областта на развитие на велосипедното движение и велотуризма от цялата страна. 
             На
            конференцията бяха представени <nbsp />
            <Link to="/page">Националния велосипеден план</Link> и конкретните трасета на Национална
            мрежа от велосипедни маршрути. 
            <br />
            <br />
            Конференцията се организира от Българска асоциация за алтернативен
            туризъм с подкрепата на Министерство на туризма като част от проекта Дунавски велосипедни планове с
            финансовата подкрепа на Програма за транснационално сътрудничество
            Дунав 2014-2020.
            <br />
            <br />
            Теми на конференцията:
            <ul>
              <li><Link to="/page">Национален велосипеден план</Link></li>
              <li><Link to="/map">Национална мрежа от велосипедни маршрути</Link></li>
              <li>Велосипедна политика и постижения на общини</li>
              <li>Велосипедни маршрути и трансгранично сътрудничество</li>
              <li>Организиране на велосипедни събития</li>
              <li>Граждански инициативи за велосипеден транспорт</li>
              <li>Велосипедна икономика</li>
            </ul>
            
            <a 
            href='http://www.baatbg.org/uploads/docs/DCP3-320-3.1/plan/programaNCC2022.pdf'
            target='_blank' 
            rel="noreferrer"
          >Програма</a> на конференцията може да изтеглите тук. 
            <br />
            <br />
            <a 
            href='http://www.baatbg.org/uploads/docs/DCP3-320-3.1/plan/NCC2022presentations.zip'
            target='_blank' 
            rel="noreferrer"
          >Презентациите от конференцията можете да изтеглите тук.</a>
            <br />
            За връзка с организаторите:
            <br />
            <img src={mail} alt="" />
          </div>
          {/* {this.state.registrationId && (
            <div>
              <h3 className="align_center">
                Вие сте регистрирани за конференцията.
              </h3>
              <button
                className="btn_arrow"
                onClick={this.handleNewRegistration}
              >
                Нова регистрация
              </button>
            </div>
          )}
          {!this.state.registrationId && (
            <form onSubmit={this.handleSubmit}>
              <h3 className="align_center">Форма за регистрация</h3>
              {this.renderInput("firstName", "Име*", firstName)}
              {this.renderInput("lastName", "Фамилия*", lastName)}
              {this.renderInput("email", "E-mail*", email)}
              {this.renderInput("organisation", "Организация*", organisation)}
              {this.renderInput("phone", "Телефон", phone)}
              <button type="submit" className="btn_arrow">
                Регистрирай се
              </button>
            </form>
          )} */}
        </div>
      </div>
    );
  }
}

export default Conference;
