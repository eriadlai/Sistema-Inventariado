import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlmacen } from "../../tools/almacenReducer";
const TablaAlmacenes = () => {
  const oDispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [almacenes, setAlmacenes] = useState([]);
  useEffect(() => {
    RutaApi.get("/almacenes").then((almacen) => setAlmacenes(almacen.data[0]));
  }, []);
  const handleProductos = (id) => {
    oDispatch(setAlmacen(id));
    navigate("/TablaProductos", { state: id });
  };
  const handleEdit = (data) => {
    navigate("/EditUsuario", { state: data });
  };

  const handleDelete = (id) => {
    console.log(id);
  };
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

    {
      field: "acciones",
      headerName: "Acciones",
      flex: 2,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              sx={{ marginRight: 1 }}
              onClick={() => handleProductos(cellValues.row.id)}
            >
              PRODUCTOS
            </Button>
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
              onClick={() => handleDelete(cellValues.row.id)}
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
