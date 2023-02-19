import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";

const TablaAlmacenes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [almacenes, setAlmacenes] = useState([]);
  useEffect(() => {
    RutaApi.get("/proveedores").then((almacen) => setAlmacenes(almacen.data[0]));
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "nombre",
      headerName: "Nombre",
      cellClassName: "name-column--cell",
    },
    {
      field: "domicilio",
      headerName: "Domicilio",
      flex: 1,
    },
    {
      field: "estado",
      headerName: "Estado",
      flex: 1,
    },
    {
      field: "ciudad",
      headerName: "Ciudad",
      flex: 1,
    },
    {
      field: "pais",
      headerName: "Pais",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="ALMACENES" subtitle="Listado de almacenes" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={almacenes}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default TablaAlmacenes;
