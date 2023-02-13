import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { RutaApi } from "../../api/url";

const TablaUsuarios = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "usuid", headerName: "ID" },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "usuario",
      headerName: "Usuario",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "rol",
      headerName: "Rol",
      flex: 1,
      renderCell: ({ row: { rol } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              rol === "ADMIN"
                ? colors.greenAccent[600]
                : rol === "manager"
                ? colors.greenAccent[700]
                : rol === "user"
                ? colors.redAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {rol === "ADMIN" && <AdminPanelSettingsOutlinedIcon />}
            {rol === "manager" && <SecurityOutlinedIcon />}
            {rol === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {rol}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    RutaApi.get("/usuarios").then((usuario) => setUsuarios(usuario.data[0]));
  }, []);
  return (
    <Box m="20px">
      <Header
        title="USUARIOS"
        subtitle="Administracion de los usuarios existentes"
      />
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
          getRowId={(usuarios) => usuarios.usuid}
          rows={usuarios}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};
export default TablaUsuarios;
