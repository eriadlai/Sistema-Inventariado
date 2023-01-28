import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  suscription: {
    id: "",
    usuario_id: "",
    isActive: false,
    nombre: "",
  },
};

const suscriptionSlice = createSlice({
  name: "suscription",
  initialState,
  reducers: {
    createSuscription: (state, action) => {
      const suscription = action.payload;
      console.log(suscription);
      //TODO: RutaAPI.post("/",action.payload)
      //TODO: Pop Mensaje + Redireccionamiento
    },
    updateSuscription: (state, action) => {
      const { id, nombre } = action.payload;
      //TODO: RutaAPI.put("/",{ id, nombre })
      //TODO: Pop Mensaje + Redireccionamiento
    },
    deleteSuscription: (state, action) => {
      const { id } = action.payload;
      //? const foundTask = state.find((task) => task.id === action.payload);
      //TODO: RutaAPI.put("/Delete",{id})
      //TODO: Pop Mensaje + Redireccionamiento
    },
  },
});

export const { createSuscription, updateSuscription, deleteSuscription } =
  suscriptionSlice.actions;
export default suscriptionSlice.reducer;
