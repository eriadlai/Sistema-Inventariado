import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
import { useNavigate } from "react-router-dom";
import { EliminarProveedor } from "../../app/proveedorContext";

const TablaProveedores = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [proveedores, setProveedores] = useState([]);
  useEffect(() => {
    RutaApi.get("/proveedores").then((proveedor) =>
      setProveedores(proveedor.data[0])
    );
  }, []);
  const handleEdit = (data) => {
    navigate("/EditProveedor", { state: data });
  };

  const handleDelete = (id) => {
    EliminarProveedor(id);
  };
  const columns = [
    { field: "provid", headerName: "ID", flex: 0.5 },
    {
      field: "provnombre",
      headerName: "Nombre",
      cellClassName: "name-column--cell",
    },
    {
      field: "provtelefono",
      headerName: "Telefono",
      flex: 1,
    },
    {
      field: "provcorreo",
      headerName: "Correo",
      flex: 1,
    },
    {
      field: "almnombre",
      headerName: "Almacen Destino",
      flex: 1,
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
              onClick={() => handleEdit(cellValues.row)}
              sx={{ marginRight: 1 }}
            >
              EDITAR
            </Button>
            <Button
              type="submit"
              color="warning"
              variant="contained"
              onClick={() => handleDelete(cellValues.row.provid)}
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
      <Header title="PROVEEDORES" subtitle="Listado de proveedores" />
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
          getRowId={(provedoores) => provedoores.provid}
          rows={proveedores}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default TablaProveedores;
