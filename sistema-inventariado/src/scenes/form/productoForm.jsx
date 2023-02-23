import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { CrearProducto } from "../../app/productoContext";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
const initialValues = {
  nombre: "",
  descripcion: "",
  sku: "",
  precio: "",
  almacenid: "",
  proveedorid: "",
  unidad: "",
};

const userSchema = yup.object().shape({
  nombre: yup.string().required("required"),
  descripcion: yup.string().required("required"),
  sku: yup.string().required("required"),
  precio: yup.number().required("required"),
  almacenid: yup.number().required("required"),
  proveedorid: yup.number().required("required"),
  unidad: yup.string().required("required"),
});
const ProductoForm = () => {
  const [almacenes, setAlmacenes] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  useEffect(() => {
    RutaApi.get("/almacenes").then((almacen) => setAlmacenes(almacen.data[0]));
  }, []);
  useEffect(() => {
    RutaApi.get("/proveedores").then((proveedor) =>
      setProveedores(proveedor.data[0])
    );
  }, []);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
    //CrearProducto(values);
  };
  return (
    <Box m="20px">
      <Header title="CREAR PRODUCTO" subtitle="Crear un nuevo producto" />
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
                label="Descripcion"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.descripcion}
                name="descripcion"
                error={!!touched.descripcion && !!errors.descripcion}
                helperText={touched.descripcion && errors.descripcion}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="SKU"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sku}
                name="sku"
                error={!!touched.sku && !!errors.sku}
                helperText={touched.sku && errors.sku}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Precio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.precio}
                name="precio"
                error={!!touched.precio && !!errors.precio}
                helperText={touched.precio && errors.precio}
                sx={{ gridColumn: "span 2" }}
              />
              <Autocomplete
                disablePortal
                id="oAlmacenes"
                onChange={(event, value) => (values.almacenid = value.id)}
                options={almacenes}
                getOptionLabel={(opt) => opt.nombre}
                sx={{ gridColumn: "span 2" }}
                renderInput={(params) => (
                  <TextField {...params} label="Almacenes" />
                )}
              />
              <Autocomplete
                disablePortal
                id="oProveedores"
                onChange={(event, value) => (values.proveedorid = value.provid)}
                options={proveedores}
                getOptionLabel={(opt) => opt.provnombre}
                sx={{ gridColumn: "span 2" }}
                renderInput={(params) => (
                  <TextField {...params} label="Proveedores" />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear Producto
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default ProductoForm;
