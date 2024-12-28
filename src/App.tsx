
import { Routes, Route } from 'react-router-dom'
import { Hero } from './Pages/Hero'
import CoffeeShop from './Pages/CoffeeShop'
import SuccessPayment from './Pages/SuccessPayment'

function App() {

  return (
    <div>



      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/coffee" element={<CoffeeShop />} />
        <Route path="/coffee/paymentsuccessfull" element={<SuccessPayment />} />


      </Routes>


    </div>
  )
}

export default App
