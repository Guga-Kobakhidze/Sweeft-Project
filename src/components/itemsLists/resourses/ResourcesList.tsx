import React, { useState } from "react";
import { Resource, User } from "../../../interfaces/Interfaces";
import ResourcesDetails from "./ResourceDetails";
import { Buttons, UsersStyle } from "../../styles/usersListStyle";
import useItemLists from "../../../hooks/useItemLists";
import AddNewItem from "../AddNewItem";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useCookie from "../../../hooks/useCookie";

const ResourcesList: React.FC = () => {
  const apiEndpoint = "https://reqres.in/api/unknown?per_page=12";
  const [selectedResource, setselectedResource] = useState<Resource | null>(
    null
  );
  const [resourceList, setResourceList] = useLocalStorage("resourceList", []);

  const [TOKEN] = useCookie("TOKEN", "");

  const {
    currentPage,
    fetchRequest,
    loading,
    newItem,
    nextPage,
    onClick,
    onClickOverlay,
    prevPage,
    tableView,
    tableview,
  } = useItemLists({ apiEndpoint });

  const goBack = () => {
    setselectedResource(null);
    window.location.reload();
  };

  const onViewDetails = (user: Resource) => {
    setselectedResource(user);
  };

  const handleResourceAdd = (newUser: User) => {
    setResourceList((prev: []) => [newUser, ...prev]);
  };

  if (loading || !fetchRequest) {
    return <div>Loading...</div>;
  }

  const resources: Array<Resource> = fetchRequest.data;

  const resourcesPerPage = 10;
  const startIndex = (currentPage - 1) * resourcesPerPage;
  const endIndex = startIndex + resourcesPerPage;

  const allResources = [...resourceList, ...resources];
  const visibleResources = allResources.slice(startIndex, endIndex);

  const numberOfpages = Math.ceil(allResources.length / resourcesPerPage);

  return (
    <div>
      {selectedResource ? (
        <ResourcesDetails resource={selectedResource} goBack={goBack} />
      ) : (
        <div>
          <Buttons>
            {TOKEN ? (
              <button onClick={onClick}>Add new</button>
            ) : (
              <div>log In for add New Resource</div>
            )}
            <button onClick={tableView}>View Different Stage</button>
          </Buttons>
          {newItem && (
            <AddNewItem
              itemColor="color"
              close={onClickOverlay}
              itemAdd={handleResourceAdd}
              item="unknown"
              itemTitle="name"
              itemStatus="year"
            />
          )}
          <UsersStyle>
            <div className={tableview ? "postView" : "tableView"}>
              {visibleResources.length &&
                visibleResources.map((resource) => (
                  <div
                    style={{ backgroundColor: resource.color }}
                    className="UsersCard"
                    key={resource.id}
                  >
                    <h2>{resource.name}</h2>
                    <p>{resource.year}</p>
                    <p>{resource.pantone_value}</p>
                    <div className="button">
                      <button onClick={() => onViewDetails(resource)}>
                        See More
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </UsersStyle>
          <Buttons>
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button onClick={nextPage} disabled={numberOfpages === currentPage}>
              Next Page
            </button>
          </Buttons>
        </div>
      )}
    </div>
  );
};

export default ResourcesList;
