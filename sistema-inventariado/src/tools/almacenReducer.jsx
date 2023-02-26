import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  idAlmacen: "",
};

const almacenSlice = createSlice({
  name: "almacen",
  initialState,
  reducers: {
    setAlmacen: (state, action) => {
      return {
        ...state,
        idAlmacen: action.payload,
      };
    },
    deleteAlmacen: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { setAlmacen, deleteAlmacen } = almacenSlice.actions;
export default almacenSlice.reducer;
