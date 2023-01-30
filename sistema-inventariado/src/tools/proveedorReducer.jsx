import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  proveedor: {
    id: "",
    nombre: "",
    telefono: "",
    correo: "",
    notas: "",
    isActive: false,
  },
};

const proveedorSlice = createSlice({
  name: "proveedor",
  initialState,
  reducers: {
    createProveedor: (state, action) => {
      const proveedor = action.payload;
      console.log(proveedor);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateProveedor: (state, action) => {
      const { id, nombre } = action.payload;
      //TODO: RutaAPI.put("/",{ id, nombre })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteProveedor: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createProveedor, updateProveedor, deleteProveedor } =
  proveedorSlice.actions;
export default proveedorSlice.reducer;
