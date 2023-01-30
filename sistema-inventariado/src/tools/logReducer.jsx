import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  log: {
    id: "",
    producto_id: "",
    almacen_id: "",
    usuario_id: "",
    nota: "",
    cantidadDec: "",
    cantidadAntes: "",
    isActive: false,
  },
};

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    createLog: (state, action) => {
      const log = action.payload;
      console.log(log);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateLog: (state, action) => {
      const {
        id,
        producto_id,
        almacen_id,
        usuario_id,
        nota,
        cantidadDec,
        cantidadAntes,
      } = action.payload;
      //TODO: RutaAPI.put("/",{ })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteLog: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createLog, updateLog, deleteLog } = logSlice.actions;
export default logSlice.reducer;
