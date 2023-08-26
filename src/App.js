// import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppNav';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router';
import Market from './pages/Market';
import Portfolio from './pages/Portfolio';
// import Logo from './images/logo.jpeg';
// SUPPPPPPPPPPPPPPPPPP BOIIIIIIIIIIIIIIIIIISSSSSSSSSSSSSSSSS
function App() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Market' element={<Market/>}></Route>
          <Route path='/Portfolio' element={<Portfolio/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
