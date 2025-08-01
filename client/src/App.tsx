import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}


export default App