import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Contact from "./components/Contact"
import AboutUsPage from "./pages/Aboutus"
import Footer from "./components/footer"
import ManagementTeam from "./pages/managementteam"
function App() {
  return (<BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
      <Route path="/team" element={<ManagementTeam></ManagementTeam>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>)
}

export default App