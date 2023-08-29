import './App.css';
import ResponsiveAppBar from './components/AppNav';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router';
import Market from './pages/Market';
import Portfolio from './pages/Portfolio';
import LoginPage from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Trade from './pages/Trade';

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Market' element={<Market/>}></Route>
          <Route path='/Portfolio' element={<Portfolio/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Trade' element={<Trade/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
