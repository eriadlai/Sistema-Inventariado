import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { RutaApi } from "../api/url";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
/**
 * * LOGICA A GUARDAR
 * ! const foundTask = state.find((task) => task.id === id);
 * !   if (foundTask) {
 * !       foundTask.title = title;
 * !       foundTask.description = description;
 * !     }
 * **/
const initialState = {
  user: {
    id: "",
    nombre: "",
    username: "",
    rol: "",
    almacen_id: "",
    isActive: true,
    isLoged: false,
  },
};

const userSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const user = action.payload;
      const oUsuario = {
        oRolId: 1,
        oNombre: user.nombre,
        oUsername: user.username,
        oPassword: user.password,
        oSalt: "a",
      };
      console.log(oUsuario, "USUARIO REGISTRADO!!");
      //TODO: RutaAPI.post("/Usuario",action.payload)
      RutaApi.post("/usuarios", oUsuario);
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateUser: (state, action) => {
      const { id, nombre, username, almacen_id } = action.payload;
      //TODO: RutaAPI.put("/Usuario",{id,nombre,username,almacen_id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/UsuarioDelete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
    loginUser: async (state, action) => {
      const { username, password } = action.payload;
      const oBody = { oUser: username, oPass: password };
      let usuarioActivo = {
        id: "",
        nombre: "",
        username: "",
        rol: "",
        almacen_id: "",
        isActive: true,
        isLoged: false,
      };
      const oUsuario = await RutaApi.post("/usuarios/Login", oBody);
      if (oUsuario.data[0][0].stado != 40) {
        MySwal.fire({
          title: "Success!",
          text: "Bienvenido!",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).finally(() => {
          usuarioActivo = {
            id: oUsuario.data[0][0].id,
            nombre: oUsuario.data[0][0].nombreUsuario,
            username: username,
            rol: oUsuario.data[0][0].usuarioRol,
            almacen_id: oUsuario.data[0][0].usualmAlmacen_id,
            isActive: true,
            isLoged: true,
          };
        });
      } else {
        console.log("CREDENCIALES INCORRECTAS");
      }
      return {
        ...state,
        user: usuarioActivo,
      };
      //TODO: Pop Mensaje + Redireccionamiento
    },
    logoutUser: (state) => {
      const usuarioDesactivado = {
        id: "",
        nombre: "",
        username: "",
        rol: "",
        almacen_id: "",
        isActive: true,
        isLoged: false,
      };
      return {
        ...state,
        user: usuarioDesactivado,
      };
    },
  },
});

export const { createUser, updateUser, deleteUser, loginUser, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;
