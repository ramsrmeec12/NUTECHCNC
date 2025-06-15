import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/homepage"
import Contact from "./components/Contact"
import AboutUsPage from "./pages/Aboutus"
import Footer from "./components/footer"
import ManagementTeam from "./pages/managementteam"
import InfrastructureSection from "./pages/Infrastructure"
import ProductListing from "./pages/Products"
import Quality from "./pages/quality"
import BlogPage from "./pages/Blogpage"
import LoginPage from "./pages/Loginpage"
import BlogForm from "./components/BlogForm"
function App() {
  return (<BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
      <Route path="/team" element={<ManagementTeam></ManagementTeam>}></Route>
      <Route path="/infrastructure" element={<InfrastructureSection></InfrastructureSection>}></Route>
      <Route path="/products" element={<ProductListing></ProductListing>}></Route>
      <Route path="/quality" element={<Quality></Quality>}></Route>
      <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/writeblog" element={<BlogForm></BlogForm>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>)
}

export default App