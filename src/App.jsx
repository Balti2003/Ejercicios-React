import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ejercicio1 from "./components/Ejercicio1/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9/Ejercicio9";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/ej1">Ejercicio 1</Link> |{" "}
        <Link to="/ej2">Ejercicio 2</Link> |{" "}
        <Link to="/ej3">Ejercicio 3</Link> |{" "}
        <Link to="/ej4">Ejercicio 4</Link> |{" "}
        <Link to="/ej5">Ejercicio 5</Link> |{" "}
        <Link to="/ej6">Ejercicio 6</Link> |{" "}
        <Link to="/ej7">Ejercicio 7</Link> |{" "}
        <Link to="/ej8">Ejercicio 8</Link> |{" "}
        <Link to="/ej9">Ejercicio 9</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ej1" element={<Ejercicio1 />} />
        <Route path="/ej2" element={<Ejercicio2 />} />
        <Route path="/ej3" element={<Ejercicio3 />} />
        <Route path="/ej4" element={<Ejercicio4 />} />
        <Route path="/ej5" element={<Ejercicio5 />} />
        <Route path="/ej6" element={<Ejercicio6 />} />
        <Route path="/ej7" element={<Ejercicio7 />} />
        <Route path="/ej8" element={<Ejercicio8 />} />
        <Route path="/ej9" element={<Ejercicio9 />} />
      </Routes>
    </div>
  );
}

export default App
