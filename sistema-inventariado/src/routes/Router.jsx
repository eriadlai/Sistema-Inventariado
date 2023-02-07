import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../scenes/global/dashboard/index";
import Team from "../scenes/team/index";
import Invoices from "../scenes/invoices/index";
import Contacts from "../scenes/contacts";
import Calendar from "../scenes/calendar";
import Bar from "../scenes/bar/index";
import Form from "../scenes/form/userForm";
import AlmacenForm from "../scenes/form/almacenForm";
import ExistenciasForm from "../scenes/form/existensiasForm";
import ProductoForm from "../scenes/form/productoForm";
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
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/form" element={<Form />} />
        <Route path="/almacenForm" element={<AlmacenForm />} />
        <Route path="/existenciasForm" element={<ExistenciasForm />} />
        <Route path="/productoForm" element={<ProductoForm />} />
        <Route path="/proveedorForm" element={<ProveedorForm />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
};

export default Router;
