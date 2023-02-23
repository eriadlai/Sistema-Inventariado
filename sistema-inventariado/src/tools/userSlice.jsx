import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { RutaApi } from "../api/url";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LoginModule } from "../app/usuarioContext";
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
    loginUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
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

export const {  loginUser, logoutUser } =
  userSlice.actions;
export default userSlice.reducer;
