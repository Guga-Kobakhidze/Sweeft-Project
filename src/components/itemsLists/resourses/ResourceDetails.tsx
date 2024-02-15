import React, { useRef, useState } from "react";
import { UsersStyle } from "../../styles/usersListStyle";
import { Resource } from "../../../interfaces/Interfaces";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useCookie from "../../../hooks/useCookie";
import useRequest from "../../../hooks/useRequest";

interface ResourcesDetaiilsProps {
  resource: Resource;
  goBack: () => void;
}

const ResourcesDetails: React.FC<ResourcesDetaiilsProps> = ({
  resource,
  goBack,
}) => {
  const [resourceList, setResourceList] = useLocalStorage("resourceList", []);
  const [TOKEN] = useCookie("TOKEN", "");

  const [editMode, setEditMode] = useState(false);
  const { sendRequest } = useRequest({
    url: `https://reqres.in/api/unknown/${resource.id}`,
    method: "PATCH",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const onEdit = () => {
    setEditMode((prev) => !prev);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editedUser = {
      id: resource.id,
      name: nameRef.current?.value || resource.name,
      year: yearRef.current?.value || resource.year,
    };

    sendRequest(editedUser)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setResourceList((prev: []) =>
      prev.map((edit: Resource) =>
        edit.id === resource.id ? editedUser : edit
      )
    );

    console.log(resourceList);
  };

  return (
    <div>
      {resource ? (
        <div>
          <button onClick={goBack}>Go Back</button>
          <UsersStyle>
            <div
              style={{ backgroundColor: `${resource.color}` }}
              className="UsersCard"
            >
              <h2>{resource.name}</h2>
              <p>{resource.year}</p>
              <p>{resource.pantone_value}</p>
            </div>
          </UsersStyle>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {TOKEN && (
        <div>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
      {editMode && (
        <form onSubmit={onSubmit}>
          <input type="text" ref={nameRef} defaultValue={resource.name} />
          <input type="text" ref={yearRef} defaultValue={resource.year} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default ResourcesDetails;
