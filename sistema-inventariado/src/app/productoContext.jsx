import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { RutaApi } from "../api/url";
const MySwal = withReactContent(Swal);

export const CrearProducto = async (oProducto) => {
  try {
    const SetProducto = {
      oNombre: oProducto.nombre,
      oDescripcion: oProducto.descripcion,
      oSku: oProducto.sku,
      oPrecio: oProducto.precio,
    };
    await RutaApi.post("/products", SetProducto).then(
      MySwal.fire({
        title: "Producto creado",
        text: "El Producto ha sido creado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/productoForm"))
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
