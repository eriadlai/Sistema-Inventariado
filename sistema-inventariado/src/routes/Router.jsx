import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../scenes/global/dashboard/index";
import TablaUsuarios from "../scenes/tablas/TablaUsuarios";
import Invoices from "../scenes/invoices/index";
import TablaAlmacenes from "../scenes/tablas/TablaAlmacenes";
import Calendar from "../scenes/calendar";
import Bar from "../scenes/bar/index";
import Form from "../scenes/form/userForm";
import UserEditForm from "../scenes/form/userEditForm";
import AlmacenForm from "../scenes/form/almacenForm";
import ProductoForm from "../scenes/form/productoForm";
import TablaProductos from "../scenes/tablas/TablaProductos";
import ProveedorForm from "../scenes/form/proveedorForm";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Login from "../scenes/Login";
import RutaPrivada from "./RutaPrivada";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<RutaPrivada />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<TablaUsuarios />} />
        <Route path="/EditUsuario" element={<UserEditForm />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/contacts" element={<TablaAlmacenes />} />
        <Route path="/TablaProductos" element={<TablaProductos />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/form" element={<Form />} />
        <Route path="/almacenForm" element={<AlmacenForm />} />
        <Route path="/productoForm" element={<ProductoForm />} />
        <Route path="/proveedorForm" element={<ProveedorForm />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
};

export default Router;
