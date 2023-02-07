import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { createExistencias } from "../../tools/existensiasReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const initialValues = {
  almacen_id: "",
  producto_id: "",
  proveedor_id: "",
  cantidad: "",
  unidad: "",
};

const userSchema = yup.object().shape({
  almacen_id: yup.number().required("required"),
  producto_id: yup.number().required("required"),
  proveedor_id: yup.number().required("required"),
  cantidad: yup.string().required("required"),
  unidad: yup.string().required("required"),
});
const ExistenciasForm = () => {
  const oUsuarios = useSelector((state) => state.usuario);
  const oNavegacion = useNavigate();
  useEffect(() => {
    if (!oUsuarios.user.isLoged) {
      console.log("NO LOGEADO");
      oNavegacion("/Login");
    }
  });
  const oDispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    oDispatch(createExistencias(values));
  };
  return (
    <Box m="20px">
      <Header
        title="CREAR EXISTENCIAS"
        subtitle="Manejar las existencias de los productos"
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
                type="number"
                label="Almacen"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.almacen_id}
                name="almacen_id"
                error={!!touched.almacen_id && !!errors.almacen_id}
                helperText={touched.almacen_id && errors.almacen_id}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Producto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.producto_id}
                name="producto_id"
                error={!!touched.producto_id && !!errors.producto_id}
                helperText={touched.producto_id && errors.producto_id}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Proveedor"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.proveedor_id}
                name="proveedor_id"
                error={!!touched.proveedor_id && !!errors.proveedor_id}
                helperText={touched.proveedor_id && errors.proveedor_id}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cantidad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cantidad}
                name="cantidad"
                error={!!touched.cantidad && !!errors.cantidad}
                helperText={touched.cantidad && errors.cantidad}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Unidad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.unidad}
                name="unidad"
                error={!!touched.unidad && !!errors.unidad}
                helperText={touched.unidad && errors.unidad}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear Existencias
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default ExistenciasForm;
