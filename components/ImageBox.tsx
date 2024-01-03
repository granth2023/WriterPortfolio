import React from 'react';
import '../styles/globals.css';
interface ImageBoxProps {
//     imageUrl: string;
    altText: string;
}

//pass imageUrl along with altText 
const ImageBox: React.FC<ImageBoxProps> = ({ altText }) => {
    console.log("rendering ImageBox:", altText)
    return (
        <div className="m-4 shadow-lg border-4 border-black" style= {{ width: '300px', height: '300px' }}>
            <div className="bg-red-500 h-full w-full" aria-label={altText}> </div>
            </div>
    )
}
 export default ImageBox;


/* <img src={imageUrl} alt={altText} className="w-full" /> */  

//ToDO: make it a carousel and a blog detective blog  Detective Writer 