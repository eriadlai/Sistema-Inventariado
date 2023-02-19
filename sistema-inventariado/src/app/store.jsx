import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../tools/userSlice";
import rolReducer from "../tools/rolReducer";
import almacenReducer from "../tools/almacenReducer";
import logReducer from "../tools/logReducer";
import productoReducer from "../tools/productoReducer";
import proveedorReducer from "../tools/proveedorReducer";
import suscriptionReducer from "../tools/suscriptionReducer";

const rootReducer = combineReducers({
  usuario: userReducer,
  rol: rolReducer,
  almacen: almacenReducer,
  log: logReducer,
  producto: productoReducer,
  proveedor: proveedorReducer,
  suscription: suscriptionReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { persistor };
export default store;
