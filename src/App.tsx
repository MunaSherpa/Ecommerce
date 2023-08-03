import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

import Signin from "./pages/Signin"
import Signup from "./pages/Signup"


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
