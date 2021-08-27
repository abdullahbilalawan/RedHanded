import React from "react";
import Baner from "./Baner";

const HomePage = (props) => {
  console.log.apply(props.history);
  return (
    <>

    <div className="homecontainer">
     <div className="homepage">
  <Baner
        title="Red Handed"
 subtitle="AI invigilation"/>
</div>
</div>
  
   
    
   
   
      </>
  
   
  )}
     

export default HomePage;
