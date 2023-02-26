import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { RutaApi } from "../api/url";
const MySwal = withReactContent(Swal);

export const LoginModule = async (username, password) => {
  const oBody = { oUser: username, oPass: password };
  let SetUsuario = {
    id: "",
    nombre: "",
    username: "",
    rol: "",
    almacen_id: "",
    isActive: true,
    isLoged: false,
  };
  const oUsuario = await RutaApi.post("/usuarios/Login", oBody);
  if (oUsuario.data[0][0].stado !== 40) {
    MySwal.fire({
      title: "Success!",
      text: "Bienvenido!",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    SetUsuario = {
      id: oUsuario.data[0][0].id,
      nombre: oUsuario.data[0][0].usuarioNombre,
      username: username,
      rol: oUsuario.data[0][0].usuarioRol,
      almacen_id: oUsuario.data[0][0].usualmAlmacen_id,
      isActive: true,
      isLoged: true,
    };
  } else {
    MySwal.fire({
      title: "Error!",
      text: "Usuario o contraseña incorrectos",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
  return SetUsuario;
};
export const CrearUsuario = async (oUsuario) => {
  try {
    const SetUsuario = {
      oRolId: oUsuario.rol,
      oNombre: oUsuario.nombre,
      oUsername: oUsuario.username,
      oPassword: oUsuario.password,
      oSalt: "a",
      oAlmacen_id: oUsuario.almacen_id,
    };
    await RutaApi.post("/usuarios", SetUsuario).then(
      MySwal.fire({
        title: "Usuario creado",
        text: "El usuario ha sido creado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/form"))
    );
    //TODO: Pop Mensaje + Redireccionamiento
  } catch (error) {
    MySwal.fire({
      title: "Error",
      text: "Ups, ha ocurrido un problema",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
export const EliminarUsuario = async (oID) => {
  RutaApi.put("/usuarios/delete", { oUsuarioId: oID })
    .then((res) => {
      console.log(res);
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
export const UpdateUsuario = async (oUsuario) => {
  console.log(oUsuario);
  const SetUsuario = {
    oUsuarioId: oUsuario.id,
    oRolId: oUsuario.rol,
    oNombre: oUsuario.nombre,
    oUsername: oUsuario.username,
  };
  RutaApi.put("/usuarios", SetUsuario)
    .then((res) => {
      MySwal.fire({
        title: "Accion exitosa",
        text: "El usuario ha sido actualizado con exito",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.replace("/TablaUsuarios"));
    })
    .catch((error) => {
      MySwal.fire({
        title: "Error",
        text: "Ups, ha ocurrido un problema",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
};
