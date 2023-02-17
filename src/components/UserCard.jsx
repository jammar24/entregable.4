import React from "react";
import "../components/usercard.css";

const UserCard = ({ user, deleteUser, setUpdateInfo, handleOpen }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpen();
  };

  return (
    <article className="card">
      <h2 className="card__principal">
        <i className="bx bxs-user-check"></i>
        {`${user.first_name} ${user.last_name}`}
      </h2>
      <ul className="card__container">
        <li className="card__item">
          <span className="card__label">
            <i className="bx bx-envelope"></i> Email: {" "}
          </span>{" "}
          {user.email}{" "}
        </li>
        <li className="card__item">
          <span className="card_label">
            <i className="bx bx-cake"></i> Birthday: {" "}
          </span>
          <br />
          {user.birthday}
        </li>
      </ul>
      <button className="card__btn" onClick={handleDelete}>
        <i className="bx bxs-trash"></i>
      </button>
      <button className="card__btn" onClick={handleUpdate}>
        <i className="bx bxs-edit"></i>
      </button>
    </article>
  );
};

export default UserCard;
