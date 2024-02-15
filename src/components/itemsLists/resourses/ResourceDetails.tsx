import React, { useRef, useState } from "react";
import { UsersStyle } from "../../styles/usersListStyle";
import {
  Resource,
  ResourcesDetaiilsProps,
} from "../../../interfaces/Interfaces";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useCookie from "../../../hooks/useCookie";
import useRequest from "../../../hooks/useRequest";

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
  const colorRef = useRef<HTMLInputElement>(null);

  const onEdit = () => {
    setEditMode((prev) => !prev);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editedUser = {
      id: resource.id,
      name: nameRef.current?.value || resource.name,
      year: yearRef.current?.value || resource.year,
      color: colorRef.current?.value || resource.color,
    };

    sendRequest(editedUser)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    setResourceList((prev: []) =>
      prev.map((edit: Resource) =>
        edit.id === resource.id ? editedUser : edit
      )
    );

    setEditMode(false);
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
      {TOKEN ? (
        <div>
          <button onClick={onEdit}>Edit</button>
        </div>
      ) : (
        <div>log In to change details</div>
      )}
      {editMode && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            ref={nameRef}
            defaultValue={resource.name}
            required
          />
          <input
            type="text"
            ref={yearRef}
            defaultValue={resource.year}
            required
          />
          <input
            type="text"
            ref={colorRef}
            defaultValue={resource.color}
            required
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default ResourcesDetails;
