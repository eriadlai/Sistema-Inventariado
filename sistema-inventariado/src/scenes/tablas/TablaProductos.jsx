import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
import { useLocation } from "react-router-dom";
const TablaProductos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { state: id } = useLocation();
  console.log(id);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    RutaApi.post("/products/byalmacenid", { oAlmacenId: id }).then((producto) =>
      setProductos(producto.data[0])
    );
  }, []);
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
