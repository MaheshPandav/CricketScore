
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home'
import MatchDetails from './Screens/MatchDetails'

function App() {
  return (
    <Routes>
      <Route 
      path="/" element={<Home />}>
      </Route>
      <Route 
      path="/matchdetails/:id" element={<MatchDetails />}>
      </Route>
    </Routes>
  );
}

export default App;
