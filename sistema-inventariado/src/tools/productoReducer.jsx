import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  producto: {
    id: "",
    nombre: "",
    descripcion: "",
    sku: "",
    precio: "",
    isActive: false,
  },
};

const productoSlice = createSlice({
  name: "producto",
  initialState,
  reducers: {
    createProducto: (state, action) => {
      const producto = action.payload;
      console.log(producto);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateProducto: (state, action) => {
      const { id, nombre } = action.payload;
      //TODO: RutaAPI.put("/",{ })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteProducto: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createProducto, updateProducto, deleteProducto } =
  productoSlice.actions;
export default productoSlice.reducer;
