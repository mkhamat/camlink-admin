import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./Screens/AdminPanel/AdminPanel";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/signup' element={<LoginScreen signup/>} />
          <Route path='/admin' element={<AdminPanel/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
