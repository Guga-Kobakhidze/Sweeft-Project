import React, { useRef } from "react";
import { User } from "../../interfaces/Interfaces";
import useRequest from "../../hooks/useRequest";
import { NewUser, Overlay } from "../styles/usersListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface AddNewItemsProps {
  close: () => void;
  itemAdd: (newItem: User) => void;
  item: string;
  itemTitle: string;
  itemStatus: string;
  itemColor: string;
}

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

  const handleAddItem = () => {
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
      <NewUser>
        <div className="icon">
          <FontAwesomeIcon onClick={close} icon={faXmark} />
        </div>
        <div>
          <h1>Add New {item}</h1>
          <div>
            <label htmlFor={itemTitle}>{inputTitle}:</label>
            <input
              type="text"
              id={itemTitle}
              name={itemTitle}
              ref={itemTitleRef}
              value={itemTitleRef.current?.value}
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
            />
            <div>
              <label htmlFor={itemStatus}>{inputTitle3}:</label>
              <input
                type="text"
                id={itemStatus}
                name={itemColor}
                ref={itemColorRef}
                value={itemColorRef.current?.value}
              />
            </div>
            <button onClick={handleAddItem}>Add {item}</button>
          </div>
        </div>
      </NewUser>
      <Overlay onClick={close}></Overlay>
    </div>
  );
};

export default AddNewItem;
