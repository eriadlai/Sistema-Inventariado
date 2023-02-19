import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { RutaApi } from "../api/url";
const MySwal = withReactContent(Swal);

export const CrearProveedor = async (oProveedor) => {
  try {
    const SetProveedor = {
      oNombre: oProveedor.nombre,
      oTelefono: oProveedor.telefono,
      oCorreo: oProveedor.correo,
      oNotas: oProveedor.notas,
    };
    await RutaApi.post("/proveedores", SetProveedor).then(
      MySwal.fire({
        title: "Proveedor creado",
        text: "El Proveedor ha sido creado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/proveedorForm"))
    );
  } catch (error) {
    MySwal.fire({
      title: "Error",
      text: "Ups, ha ocurrido un problema",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
