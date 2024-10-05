import React, { useState,useCallback} from "react";
import { Navigate, useNavigate } from "react-router-dom";
const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const setClick =useCallback(()=>{
        navigate(`room/${value}`)
  },[navigate,value])
  return (
    <>
      <h1>Make a Video call</h1>
      <div className="Form">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter the Room Name"
        />
        <input type="button" value={"join"} onClick={setClick}/>
      </div>
    </>
  );
};
export default HomePage;
