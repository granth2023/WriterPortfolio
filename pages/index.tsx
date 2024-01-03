// import React from "react";
// import ThreeContainer from '../components/ThreeContainer'

// const Home = () => {
//   return ( 
//     <div> 
//       <h1> Welcome to my Three.JS integration</h1>
//       <ThreeContainer/>
//     </div>
//   );
// };

// export default Home;

import ImageBox from '../components/ImageBox';
import '../styles/globals.css'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow';
// const HomePage = () => {
//   return ( 
//     <div className="flex flex-wrap justify-center items-center bg-gray-100 p-8">
//       {[1, 2, 3, 4, 5].map((num) => {
//         <ImageBox
//           key={num}
//           altText={'Placeholder Image $Pindex + 1}`}
//           />
//       ))}
     
//     </div>
//   )
//       };


const HomePage = () => {
  console.log("Rendering HomePage");
  return (
    <div className="relative  bg-white-100 h-screen">
      <LeftArrow/>
      <RightArrow/>
    <div className="flex flex-wrap justify-center items-center bg-white-100 p-8 h-screen">
      {Array.from({ length: 5 }).map((_, index)=> (
        <ImageBox
          key={index}
          altText={`Placeholder Image ${ index + 1}`}
          />
      ))}
    </div>
    </div>
  )
};

export default HomePage; 