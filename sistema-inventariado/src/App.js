import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/global/dashboard/index";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar/index";
import Form from "./scenes/form/index";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
