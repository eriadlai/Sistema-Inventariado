import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../tools/userSlice";
import rolReducer from "../tools/rolReducer";
import almacenReducer from "../tools/almacenReducer";
import existenciasReducer from "../tools/existensiasReducer";
import logReducer from "../tools/logReducer";
import productoReducer from "../tools/productoReducer";
import proveedorReducer from "../tools/proveedorReducer";
import suscriptionReducer from "../tools/suscriptionReducer";
const rootReducer = combineReducers({
  usuario: userReducer,
  rol: rolReducer,
  almacen: almacenReducer,
  existencias: existenciasReducer,
  log: logReducer,
  producto: productoReducer,
  proveedor: proveedorReducer,
  suscription: suscriptionReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
