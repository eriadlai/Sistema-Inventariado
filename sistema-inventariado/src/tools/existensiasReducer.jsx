import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  existencias: {
    id: "",
    almacen_id: "",
    producto_id: "",
    proveedor_id: "",
    cantidad: "",
    unidad: "",
  },
};

const existenciasSlice = createSlice({
  name: "existencias",
  initialState,
  reducers: {
    createExistencias: (state, action) => {
      const existencias = action.payload;
      console.log(existencias);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateExistencias: (state, action) => {
      const { id, nombre } = action.payload;
      //TODO: RutaAPI.put("/",{ id, nombre })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteExistencias: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createExistencias, updateExistencias, deleteExistencias } =
  existenciasSlice.actions;
export default existenciasSlice.reducer;
