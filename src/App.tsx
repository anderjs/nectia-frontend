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
import Products from "./pages/products";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <ThemeProvider theme={injectedThemeStyles}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        draggable
        pauseOnHover
        pauseOnFocusLoss
      >
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path={Router.HOME} element={<View />} />
              <Route
                path={Router.DASHBOARD}
                element={
                  <Private>
                    <Dashboard />
                  </Private>
                }
              />
              <Route
                path={Router.PRODUCTS}
                element={
                  <Private>
                    <Products />
                  </Private>
                }
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </ToastContainer>
    </ThemeProvider>
  );
};

export default App;
