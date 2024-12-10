import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./page/Home";
import CreatePage from "./components/CreatePage";
import { ThemeProvider } from "@/components/theme-provider";
import UpdatePage from "./components/UpdatePage";
import FilterPage from "./page/FilterPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="create-page" element={<CreatePage />} />
        <Route path="update-page/:id" element={<UpdatePage />} />
        <Route path="filter-page" element={<FilterPage />} />
      </Route>
    )
  );
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
