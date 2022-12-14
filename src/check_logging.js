import {  Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Check_login = () => {
    const navigate = useNavigate();
    useEffect(()=> {
      axios.get("http://localhost:9000/userauth",
      {withCredentials: true}
      ).then(function (response) {
          console.log(response.data)
          if(!response.data)
          {
            navigate("/login")
          }
      }).catch((error) => 
              {
                console.log(error);
                navigate("/login")
              })
    })
    return ( 
        <Outlet/>
     );
}
 
export default Check_login;