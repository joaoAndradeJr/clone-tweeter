import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="" element={<Home />} />
        <Route path="/profile/:username" element={ <Profile /> } />
      </Route>
    </Routes>
  )
}

export default App;