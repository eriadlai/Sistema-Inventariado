import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { UpdateUsuario } from "../../app/usuarioContext";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
import { useLocation } from "react-router-dom";

const userSchema = yup.object().shape({
  nombre: yup.string().required("required"),
  username: yup.string().email("Invalid email").required("required"),
  rol: yup.number().required("required"),
});
const UserEditForm = () => {
  const { state: data } = useLocation();
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    RutaApi.get("/roles").then((rol) => setRoles(rol.data[0]));
  }, []);
  console.log(data.usuid);
  const initialValues = {
    id: data.usuid,
    nombre: data.nombre,
    username: data.usuario,
    rol: data.rol,
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
    UpdateUsuario(values);
  };
  return (
    <Box m="20px">
      <Header title="Editar Usuario" subtitle="Edicion de datos del usuario" />
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
              <Autocomplete
                disablePortal
                id="oRoles"
                options={roles}
                onChange={(event, value) => (values.rol = value.id)}
                getOptionLabel={(opt) => opt.nombre}
                sx={{ gridColumn: "span 4" }}
                renderInput={(params) => (
                  <TextField {...params} label="Roles" />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Actualizar Usuario
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default UserEditForm;
