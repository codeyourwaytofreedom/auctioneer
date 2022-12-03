import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header/header";
import Login from "./login/login";
import Navbar from "./navbar/navbar";
import Products from "./products/products";


function App() {

  function square (number) {
      console.log("Girdiğiniz sayının karesi = ",number*number)
  }
  square(15)

  return (
      <Router>
        <Routes>
          <Route path="/" 
                  element={<>
                    <div className="Page_products">
                      <Navbar/>
                      <Header/>
                      <Products/>
                    </div>
                  </>}
          />

          <Route path="/login" 
                  element={<>
                    <div className="Page_login">
                      <Navbar/>
                      <Login/>
                    </div>
                  </>}
          />

        </Routes>
      </Router>
  );
}

export default App;
