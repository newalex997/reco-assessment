import { Route, Routes } from "react-router";

import { Layout } from "./components/Layout";
import Dashboard from "./routes/dashboard";
import Home from "./routes/home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
