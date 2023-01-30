import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rol: {
    id: "",
    nombre: "",
    isActive: false,
  },
};

const rolSlice = createSlice({
  name: "rol",
  initialState,
  reducers: {
    createRol: (state, action) => {
      const rol = action.payload;
      console.log(rol);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateRol: (state, action) => {
      const { id, nombre } = action.payload;
      //TODO: RutaAPI.put("/",{ id, nombre })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteRol: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createRol, updateRol, deleteRol } = rolSlice.actions;
export default rolSlice.reducer;
