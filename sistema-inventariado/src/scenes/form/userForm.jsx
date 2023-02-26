import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { CrearUsuario } from "../../app/usuarioContext";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
const initialValues = {
  nombre: "",
  username: "",
  password: "",
  almacen_id: "",
  rol: "",
};

const userSchema = yup.object().shape({
  nombre: yup.string().required("required"),
  username: yup.string().email("Invalid email").required("required"),
  password: yup.string().required("required"),
  almacen_id: yup.number().required("required"),
  rol: yup.number().required("required"),
});
const Form = () => {
  const [almacenes, setAlmacenes] = useState([]);
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    RutaApi.get("/almacenes").then((almacen) => setAlmacenes(almacen.data[0]));
  }, []);
  useEffect(() => {
    RutaApi.get("/roles").then((rol) => setRoles(rol.data[0]));
  }, []);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    CrearUsuario(values);
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nombre}
                name="nombre"
                error={!!touched.nombre && !!errors.nombre}
                helperText={touched.nombre && errors.nombre}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Contraseña"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              {/** CONVERTIR ESTOS TEXTFIELD EN DROPDOWN */}
              <Autocomplete
                disablePortal
                id="oAlmacenes"
                onChange={(event, value) => (values.almacen_id = value.id)}
                options={almacenes}
                getOptionLabel={(opt) => opt.nombre}
                sx={{ gridColumn: "span 2" }}
                renderInput={(params) => (
                  <TextField {...params} label="Almacenes" />
                )}
              />
              <Autocomplete
                disablePortal
                id="oRoles"
                options={roles}
                onChange={(event, value) => (values.rol = value.id)}
                getOptionLabel={(opt) => opt.nombre}
                sx={{ gridColumn: "span 2" }}
                renderInput={(params) => (
                  <TextField {...params} label="Roles" />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default Form;
