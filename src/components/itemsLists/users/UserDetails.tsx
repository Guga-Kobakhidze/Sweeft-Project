import React, { useRef, useState } from "react";
import useRequest from "../../../hooks/useRequest";
import useCookie from "../../../hooks/useCookie";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { User, UserDetailsProps } from "../../../interfaces/Interfaces";
import { Overlay, SubmitDelete } from "../../styles/usersListStyle";

const UserDetailsPage: React.FC<UserDetailsProps> = ({ user, goBack }) => {
  const [userList, setUserList] = useLocalStorage("userList", []);
  const [TOKEN] = useCookie("TOKEN", "");

  const [editMode, setEditMode] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  const { sendRequest } = useRequest({
    url: `https://reqres.in/api/users/${user.id}`,
    method: "PATCH",
  });

  const { sendRequest: deleteUser } = useRequest({
    url: `https://reqres.in/api/users/${user.id}`,
    method: "DELETE",
  });

  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onEdit = () => {
    setEditMode((prev) => !prev);
  };

  const userDelete = () => {
    deleteUser();
    const filteredList = userList.filter(
      (userDelete: User) => userDelete.id !== user.id
    );
    setUserList(filteredList);
    setOnDelete(false);
    console.log(filteredList);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editedUser = {
      id: user.id,
      first_name: firstNameRef.current?.value || user.first_name,
      email: emailRef.current?.value || user.email,
    };

    sendRequest(editedUser)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setUserList((prev: []) =>
      prev.map((edit: User) => (edit.id === user.id ? editedUser : edit))
    );

    setEditMode(false);
    console.log(userList);
  };

  return (
    <div>
      <div>
        <button onClick={goBack}>Go Back</button>
        {user ? (
          <div>
            <h2>{editMode ? firstNameRef.current?.value : user.first_name}</h2>
            <p>{editMode ? emailRef.current?.value : user.email}</p>
            <img
              src={user.avatar}
              alt={editMode ? firstNameRef.current?.value : user.first_name}
            />
          </div>
        ) : (
          <div>Loading...</div>
        )}
        {TOKEN ? (
          <div>
            <button onClick={onEdit}>Edit</button>
            <button onClick={() => setOnDelete(true)} disabled={editMode}>
              Delete
            </button>
          </div>
        ) : (
          <div>log In to change details</div>
        )}
        {onDelete && (
          <div>
            <SubmitDelete>
              <h2>Do you really want to delete this?</h2>
              <div className="buttons">
                <button onClick={userDelete}>Yes</button>
                <button onClick={() => setOnDelete(false)}>No</button>
              </div>
            </SubmitDelete>
            <Overlay onClick={() => setOnDelete(false)}></Overlay>
          </div>
        )}
      </div>
      {editMode && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            ref={firstNameRef}
            defaultValue={user.first_name}
            required
          />
          <input
            type="email"
            ref={emailRef}
            defaultValue={user.email}
            required
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default UserDetailsPage;
