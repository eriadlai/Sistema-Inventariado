import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  almacen: {
    id: "",
    nombre: "",
    domicilio: "",
    estado: "",
    ciudad: "",
    pais: "",
    isActive: false,
  },
};

const almacenSlice = createSlice({
  name: "almacen",
  initialState,
  reducers: {
    createAlmacen: (state, action) => {
      const almacen = action.payload;
      console.log(almacen);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateAlmacen: (state, action) => {
      const { id, nombre } = action.payload;
      //TODO: RutaAPI.put("/",{ id, nombre })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteAlmacen: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createAlmacen, updateAlmacen, deleteAlmacen } =
  almacenSlice.actions;
export default almacenSlice.reducer;
