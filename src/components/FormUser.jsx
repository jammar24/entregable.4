import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaulVlues from "../utils/defaulValues";

const FormUser = ({
  newUser,
  updateInfo,
  updateUser,
  handleClose,
  setUpdateInfo,
}) => {
  const { reset, register, handleSubmit } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      //update
      updateUser(updateInfo.id, data);
    } else {
      //create
      newUser(data);
    }
    handleClose();
    reset(defaulVlues);
  };

  const handleX = () => {
    reset(defaulVlues);
    setUpdateInfo();
    handleClose();
  };

  return (
    <div className="form__general">
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form__tittle">
        <i className="bx bxs-user-account"></i> New User
      </h2>
      <div onClick={handleX} className="form__x">
        <i className="bx bx-message-square-x"></i>
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          {...register("email")}
          type="email"
          id="email"  placeholder='example@email.com' 
        />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          {...register("password")}
          type="password"
          id="password"  placeholder='***********'
        />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="firstName">
          {" "}
          First name
        </label>
        <input
          className="form__input"
          {...register("first_name")}
          type="text"
          id="firstName" placeholder='Enter your name' 
        />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="lastName">
          {" "}
          Last name
        </label>
        <input
          className="form__input"
          {...register("last_name")}
          type="text"
          id="lastName"  placeholder='Enter your last name'
        />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form__input"
          {...register("birthday")}
          type="date"
          id="birthday"
        />
      </div>
      <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
    </div>
  );
};

export default FormUser;
