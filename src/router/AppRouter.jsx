// src/router/AppRouter.jsx
import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  InvalidPage,
  WelcomePage,
  NotFound,
  TiresForm,
  TiresPage,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import Layout from "../components/Layout"; // Importa el Layout que contiene SuperiorBar

export const AppRouter = () => (
  <Routes>
    <Route index element={<LoginPage />} />
    <Route path="Bienvenido" element={<WelcomePage />} />
    <Route path="Invalido" element={<InvalidPage />} />
    <Route path="Error" element={<NotFound />} />
    <Route
      path="llantas"
      element={
        <PrivateRoute>
          <Layout>
            {" "}
            {/* Envolver las rutas privadas en Layout */}
            <TiresPage />
          </Layout>
        </PrivateRoute>
      }
    />
    <Route
      path="nuevallanta"
      element={
        <PrivateRoute>
          <Layout>
            {" "}
            {/* Envolver las rutas privadas en Layout */}
            <TiresForm />
          </Layout>
        </PrivateRoute>
      }
    />
  </Routes>
);
