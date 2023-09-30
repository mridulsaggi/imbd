import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/navbar/navbar"
import Movielist from "./components/movielist/movielist"
import Moviedata from "./components/movielist/moviedata"
import Home from "../src/pages/home/home"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/movie/:id" element={<Moviedata/>}></Route>
            <Route path="/*" element={<h1>ERROR 404 PAGE NOT FOUND!!</h1>}></Route>
            <Route path="movies/:type" element={<Movielist/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
