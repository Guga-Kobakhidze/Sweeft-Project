import React, { useRef } from "react";
import { AddNewItemsProps, User } from "../../interfaces/Interfaces";
import useRequest from "../../hooks/useRequest";
import { NewItem, Overlay } from "../styles/usersListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddNewItem: React.FC<AddNewItemsProps> = ({
  close,
  itemAdd,
  item,
  itemTitle,
  itemStatus,
  itemColor,
}) => {
  const { sendRequest: sendPostRequest } = useRequest({
    url: `https://reqres.in/api/${item}/`,
    method: "POST",
  });

  const itemTitleRef = useRef<HTMLInputElement>(null);
  const itemStatusRef = useRef<HTMLInputElement>(null);
  const itemColorRef = useRef<HTMLInputElement>(null);

  const inputTitle = itemTitle === "first_name" ? "First name" : "Resourses";
  const inputTitle2 = itemStatus === "email" ? "Email" : "Year";
  const inputTitle3 = itemColor === "color" ? "color" : "Age";
  const inputTitle4 = item === "users" ? "User" : "Resource";

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    const AddUser = {
      id: Math.floor(Math.random() * 2000) + 1,
      [itemTitle]: itemTitleRef.current?.value,
      [itemStatus]: itemStatusRef.current?.value,
      [itemColor]: itemColorRef.current?.value,
    };

    sendPostRequest(AddUser)
      .then((response) => {
        console.log("New user added:", response);
        itemAdd(response);
      })
      .catch((error) => console.error(error));

    close();
  };

  return (
    <div>
      <NewItem>
        <div className="icon">
          <FontAwesomeIcon onClick={close} icon={faXmark} />
        </div>
        <form onSubmit={handleAddItem}>
          <h1>Add New {inputTitle4}</h1>
          <div>
            <label htmlFor={itemTitle}>{inputTitle}:</label>
            <input
              type="text"
              id={itemTitle}
              name={itemTitle}
              ref={itemTitleRef}
              value={itemTitleRef.current?.value}
              required
            />
          </div>
          <div>
            <label htmlFor={itemStatus}>{inputTitle2}:</label>
            <input
              type={itemStatus}
              id={itemStatus}
              name={itemStatus}
              ref={itemStatusRef}
              value={itemStatusRef.current?.value}
              required
            />
          </div>
          <div>
            <label htmlFor={itemStatus}>{inputTitle3}:</label>
            <input
              type="text"
              id={itemStatus}
              name={itemColor}
              ref={itemColorRef}
              value={itemColorRef.current?.value}
              required
            />
          </div>
          <button type="submit">Add {inputTitle4}</button>
        </form>
      </NewItem>
      <Overlay onClick={close}></Overlay>
    </div>
  );
};

export default AddNewItem;
