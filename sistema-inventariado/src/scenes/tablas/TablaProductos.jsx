import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const TablaProductos = () => {
  const oIdAlmacen = useSelector((state) => state.almacen);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    RutaApi.post("/products/byalmacenid", {
      oAlmacenId: oIdAlmacen.idAlmacen,
    }).then((producto) => setProductos(producto.data[0]));
  }, []);
  const handleEdit = (data) => {
    RutaApi.post("/products/byid", { oProductoId: data }).then((producto) =>
      navigate("/EditProducto", { state: producto.data[0][0] })
    );
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  const columns = [
    { field: "prodid", headerName: "ID" },
    {
      field: "prodnombre",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "prodsku",
      headerName: "SKU",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "prodprecio",
      headerName: "Precio Unitario",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.prodprecio}
        </Typography>
      ),
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "unidad",
      headerName: "Unidad",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "acciones",
      headerName: "Acciones",
      flex: 2,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => handleEdit(cellValues.row.prodid)}
              sx={{ marginRight: 1 }}
            >
              EDITAR
            </Button>
            <Button
              type="submit"
              color="warning"
              variant="contained"
              onClick={() => handleDelete(cellValues.row.prodid)}
            >
              ELIMINAR
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCTOS" subtitle="Productos existentes en el almacen" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(producto) => producto.prodid}
          rows={productos}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default TablaProductos;
