import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
