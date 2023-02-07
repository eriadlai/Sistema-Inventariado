import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

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
    password: "",
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
      console.log(user, "USUARIO REGISTRADO!!");
      //TODO: RutaAPI.post("/Usuario",action.payload)
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
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      console.log(username, password, "CREDENCIALES INGRESADAS");

      //TODO: RutaAPI.post("/UsuarioLogin",{username,password})
      //TODO: Setear usuario activo
      const usuarioActivo = {
        id: "1",
        nombre: "Test Nombre",
        username: username,
        password: password,
        almacen_id: "2",
        isActive: true,
        isLoged: true,
      };

      return {
        ...state,
        user: usuarioActivo,
      };

      //TODO: Pop Mensaje + Redireccionamiento
    },
    logoutUser: (state) => {
      const usuarioDesactivado = {
        user: {
          id: "",
          nombre: "",
          username: "",
          password: "",
          almacen_id: "",
          isActive: true,
          isLoged: false,
        },
      };
      console.log("LOGOUT");
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
