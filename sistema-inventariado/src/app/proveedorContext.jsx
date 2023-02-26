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
export const UpdateProveedor = async (oProveedor) => {
  try {
    const SetProveedor = {
      oProveedorId: oProveedor.id,
      oNombre: oProveedor.nombre,
      oTelefono: oProveedor.telefono,
      oCorreo: oProveedor.correo,
      oNotas: oProveedor.notas,
    };
    await RutaApi.put("/proveedores", SetProveedor).then(
      MySwal.fire({
        title: "Proveedor actualizado",
        text: "El Proveedor ha sido actualizado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/TablaProveedores"))
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
export const EliminarProveedor = async (oID) => {
  RutaApi.put("/proveedores/delete", { oProveedorId: oID })
    .then((res) => {
      MySwal.fire({
        title: "Accion exitosa",
        text: "El registro ha sido eliminado con exito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        window.location.reload();
      });
    })
    .catch((error) => {
      MySwal.fire({
        title: "Error",
        text: "No se pudo eliminar el componente: " + error,
        icon: "error",
      });
    });
};
