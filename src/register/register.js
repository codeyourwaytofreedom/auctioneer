import "./register.css";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
        useEffect(() => {
                    axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response.data.express);
                }).catch((error) => console.log(error))
        });


return ( 
    <div className="Register">
        REGİSTER
    </div>
    );
}
 
export default Register;