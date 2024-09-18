import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import PrivateRoutes from "./routes/PrivateRoutes.jsx"


const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Not Found : 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App