
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/pages/HomePage'
import InventoryPage from '../src/pages/InventoryPage'
import OrderPage from '../src/pages/InventoryPage'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

function App() {
  

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/inventory" element={<InventoryPage/>} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
