import { Route, Routes } from "react-router";

import { Layout } from "./components/Layout";
import Dashboard from "./routes/settings";
import Home from "./routes/home";
import InventoryPage from "./routes/inventory";
import SettingsPage from "./routes/settings";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="inventory" element={<InventoryPage />} />
      </Route>
    </Routes>
  );
}
