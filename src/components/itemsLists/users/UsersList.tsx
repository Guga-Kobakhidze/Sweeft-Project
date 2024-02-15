import React, { useState } from "react";
import UserDetailsPage from "../users/UserDetails";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { User } from "../../../interfaces/Interfaces";
import useCookie from "../../../hooks/useCookie";
import useItemLists from "../../../hooks/useItemLists";
import AddNewItem from "../AddNewItem";
import { Buttons, UsersStyle } from "../../styles/usersListStyle";

const UsersList: React.FC = () => {
  const apiEndpoint = "https://reqres.in/api/users?per_page=12";
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userList, setUserList] = useLocalStorage("userList", []);

  const [TOKEN] = useCookie("TOKEN", "");

  const {
    currentPage,
    newItem,
    tableView,
    tableview,
    fetchRequest,
    loading,
    nextPage,
    onClick,
    onClickOverlay,
    prevPage,
  } = useItemLists({ apiEndpoint });

  if (loading || !fetchRequest) {
    return <div>Loading...</div>;
  }

  const handleUserAdd = (newUser: User) => {
    setUserList((prev: []) => [newUser, ...prev]);
  };

  const goBack = () => {
    setSelectedUser(null);
    window.location.reload();
  };

  const onViewDetails = (user: User) => {
    setSelectedUser(user);
  };

  const users: Array<User> = fetchRequest.data;

  const usersPerPage = 10;
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const allUsers = [...userList, ...users];
  const visibleUsers = allUsers.slice(startIndex, endIndex);

  const numberOfpages = Math.ceil(allUsers.length / usersPerPage);

  return (
    <div>
      {selectedUser ? (
        <UserDetailsPage user={selectedUser} goBack={goBack} />
      ) : (
        <div>
          <Buttons>
            {TOKEN ? (
              <button onClick={onClick}>Add new</button>
            ) : (
              <div>log In for add new Users</div>
            )}
            <button onClick={tableView}>View Different Stage</button>
          </Buttons>
          {newItem && (
            <AddNewItem
              itemColor={""}
              close={onClickOverlay}
              itemAdd={handleUserAdd}
              item="users"
              itemTitle="first_name"
              itemStatus="email"
            />
          )}
          <UsersStyle>
            <div className={tableview ? "postView" : "tableView"}>
              {visibleUsers.length &&
                visibleUsers.map((user, index) => (
                  <div
                    onClick={() => onViewDetails(user)}
                    className="UsersCard"
                    key={user.id || user.first_name}
                  >
                    <h2>{user.first_name}</h2>
                    <p>{user.email}</p>
                    <img src={user.avatar} alt={user.first_name} />
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

export default UsersList;
