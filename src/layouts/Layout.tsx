import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import MainPage from "../pages/MainPage";
import UsersPage from "../pages/UsersPage";
import Header from "../components/Header";
import Registration from "../components/authorization/Registration";
import Authorization from "../components/authorization/Authorization";
import ResourcesPage from "../pages/ResourcesPage";

const Layout: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Layout;
