import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import HomePage from "../../Pages/HomePage/HomePage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRuote";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
