import { BrowserRouter, Route, Routes } from "react-router-dom"
import Income from "./pages/income"
import Expense from "./pages/expense"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Income/>}/>
      <Route path="/contact" element={<Expense/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
