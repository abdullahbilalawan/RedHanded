import React from "react";
import Baner from "./Baner";

const HomePage = (props) => {
  console.log.apply(props.history);
  return (
    <>
<<<<<<< HEAD
    <div className="homecontainer">
     
  <Baner
        title="Red Handed"
 subtitle="AI invigilation"/>

</div>
  
   
    
   
   
      </>
  
   
=======
      <div className="homecontainer">
        <div className="homepage">
          <Baner title="Red Handed" subtitle="AI invigilation" />
        </div>
      </div>
    </>
>>>>>>> 634b9483e147303073c92acd989267b88c58ee29
  );
};

export default HomePage;
