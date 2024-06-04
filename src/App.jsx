import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './Pages/FrontPage/FrontPage'
import About from './Pages/About/About'
import Checkout from './Pages/Checkout/Checkout'

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<FrontPage />} />
    <Route path = '/about/:id' element={<About />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
