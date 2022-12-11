import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Check_login = () => {
    const logged = true;
    const location = useLocation();
    return ( 
        logged ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace />
     );
}
 
export default Check_login;