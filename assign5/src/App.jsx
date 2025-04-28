import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context";
import ErrorView from "./views/ErrorView.jsx";
import HomeView from './views/HomeView.jsx';
import LoginView from './views/LoginView.jsx';
import RegisterView from './views/RegisterView.jsx';
import ProtectedRoutes from "./views/ProtectedRoutes.jsx";
import MoviesView from "./views/MoviesView.jsx";
import './App.css';

function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/movies" element={<MoviesView />} >
            </Route>
          </Route>
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
