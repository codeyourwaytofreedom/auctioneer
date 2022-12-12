import { useState } from "react";

const Test = () => {
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);
    const [three, setThree] = useState(0);
    const [four, setFour] = useState(0);


    return ( 
        <div style={{width: "19vw", aspectRatio:"1/1", backgroundColor:"black", display:"grid", justifyContent:"center", alignItems:"center",
         borderTopLeftRadius:one+"%", borderTopRightRadius:two+"%", borderBottomRightRadius:three+"%", borderBottomLeftRadius:four+"%"}}>
            
            <button style={{width:"60px", height:"40px"}} onClick={()=> setOne(one+1)}>{one}</button>
            <button style={{width:"60px", height:"40px"}} onClick={()=> setTwo(two+1)}>{two}</button>
            <button style={{width:"60px", height:"40px"}} onClick={()=> setThree(three+1)}>{three}%</button>
            <button style={{width:"60px", height:"40px"}} onClick={()=> setFour(four+1)}>{four}%</button>

        </div>
     );
}
 
export default Test;
