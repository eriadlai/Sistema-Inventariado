import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { createAlmacen } from "../../tools/almacenReducer";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const initialValues = {
  nombre: "",
  domicilio: "",
  estado: "",
  ciudad: "",
  pais: "",
  isActive: true,
};

const userSchema = yup.object().shape({
  nombre: yup.string().required("required"),
  domicilio: yup.string().required("required"),
  estado: yup.string().required("required"),
  ciudad: yup.string().required("required"),
  pais: yup.string().required("required"),
});
const AlmacenForm = () => {
  const oDispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    oDispatch(createAlmacen(values));
  };
  return (
    <Box m="20px">
      <Header
        title="CREAR ALMACEN"
        subtitle="Crear un nuevo punto de almacen"
      />
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
                label="Domicilio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.domicilio}
                name="domicilio"
                error={!!touched.domicilio && !!errors.domicilio}
                helperText={touched.domicilio && errors.domicilio}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Estado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.estado}
                name="estado"
                error={!!touched.estado && !!errors.estado}
                helperText={touched.estado && errors.estado}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ciudad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ciudad}
                name="ciudad"
                error={!!touched.ciudad && !!errors.ciudad}
                helperText={touched.ciudad && errors.ciudad}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pais"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pais}
                name="pais"
                error={!!touched.pais && !!errors.pais}
                helperText={touched.pais && errors.pais}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear Almacen
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default AlmacenForm;
