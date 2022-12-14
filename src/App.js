import { Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource.js";
import Home from "./Pages/Home/Home.jsx";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import "./style/dark.scss";
import { DarkModeContext } from "./Context/darkModeContext";
import { useContext } from "react";



function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/" >
          <Route index element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="users" >
            <Route index element={<List></List>}></Route>
            <Route path=":userId" element={<Single></Single>}></Route>
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />}></Route>
          </Route>
          <Route path="products" >
            <Route index element={<List></List>}></Route>
            <Route path=":productId" element={<Single></Single>}></Route>
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />}></Route>
          </Route>

        </Route>

      </Routes>

      {/* <Home></Home> */}


    </div>
  );
}

export default App;
