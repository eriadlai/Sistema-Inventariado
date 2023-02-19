import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { CrearProveedor } from "../../app/proveedorContext";
const initialValues = {
  nombre: "",
  telefono: "",
  correo: "",
  notas: "",
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  nombre: yup.string().required("required"),
  telefono: yup.number(phoneRegExp).required("required"),
  correo: yup.string().email("Invalid Email").required("required"),
  notas: yup.string().required("required"),
});
const ProveedorForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    CrearProveedor(values);
  };
  return (
    <Box m="20px">
      <Header title="CREAR PROVEEDOR" subtitle="Crear un nuevo proveedor" />
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
                type="number"
                label="Telefono"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telefono}
                name="telefono"
                error={!!touched.telefono && !!errors.telefono}
                helperText={touched.telefono && errors.telefono}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Correo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.correo}
                name="correo"
                error={!!touched.correo && !!errors.correo}
                helperText={touched.correo && errors.correo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nota"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.notas}
                name="notas"
                error={!!touched.notas && !!errors.notas}
                helperText={touched.notas && errors.notas}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear Proveedor
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default ProveedorForm;
