import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Products from "./products/products";


function App() {
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
        </Routes>
      </Router>
  );
}

export default App;
