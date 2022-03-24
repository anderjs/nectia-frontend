import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";

// - Pages
import View from "./pages";

// - Components
import Layout from "./components/Layout";

// - Theme
import { Theme as injectedThemeStyles } from "./context";

const App = () => {
  return (
    <ThemeProvider theme={injectedThemeStyles}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
