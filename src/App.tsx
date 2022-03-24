import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";

// - Pages
import Dashboard from "./pages/dashboard";
import View from "./pages";

// - Components
import Layout from "./components/Layout";
import Private from "./components/Private";

// - Theme
import { Theme as injectedThemeStyles } from "./context";

// - Router
import { Router } from "./constants";

const App = () => {
  return (
    <ThemeProvider theme={injectedThemeStyles}>
      <Layout>
        <BrowserRouter>
          <Routes>
            {/** Public Routes */}
            <Route path={Router.HOME} element={<View />} />
            {/** Private Routes */}
            <Route
              path={Router.DASHBOARD}
              element={
                <Private>
                  <Dashboard />
                </Private>
              }
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
