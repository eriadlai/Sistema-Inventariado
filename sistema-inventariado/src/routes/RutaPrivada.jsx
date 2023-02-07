import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const RutaPrivada = () => {
  const oUsuarios = useSelector((state) => state.usuario);
  console.log("====", oUsuarios);
  return (
    <>
      {oUsuarios.user.isLoged === true ? <Layout /> : <Navigate to="/Login" />}
    </>
  );
};

export default RutaPrivada;
