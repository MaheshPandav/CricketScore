
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home'
import MatchDetails from './Screens/MatchDetails'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" element={<Home />}>
      </Route>
      <Route 
      path="/matchdetails/:type" element={<MatchDetails />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
