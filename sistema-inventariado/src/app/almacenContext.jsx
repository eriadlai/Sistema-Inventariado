import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { RutaApi } from "../api/url";
const MySwal = withReactContent(Swal);

export const CrearAlmacen = async (oAlmacen) => {
  try {
    const SetAlmacenes = {
      oNombre: oAlmacen.nombre,
      oDomicilio: oAlmacen.domicilio,
      oEstado: oAlmacen.estado,
      oCiudad: oAlmacen.ciudad,
      oPais: oAlmacen.pais,
    };
    await RutaApi.post("/almacenes", SetAlmacenes).then(
      MySwal.fire({
        title: "Almacen creado",
        text: "El Almacen ha sido creado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/almacenForm"))
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
export const EliminarAlmacen = async (oID) => {
  RutaApi.put("/almacenes/delete", { oAlmacenId: oID })
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
export const UpdateAlmacen = async (oAlmacen) => {
  try {
    const SetAlmacenes = {
      oAlmacenId: oAlmacen.id,
      oNombre: oAlmacen.nombre,
      oDomicilio: oAlmacen.domicilio,
      oEstado: oAlmacen.estado,
      oCiudad: oAlmacen.ciudad,
      oPais: oAlmacen.pais,
    };
    await RutaApi.put("/almacenes", SetAlmacenes).then(
      MySwal.fire({
        title: "Almacen Actualizado",
        text: "El Almacen ha sido actualizado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/TablaAlmacenes"))
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
