
import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Edit from './pages/Edit'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App