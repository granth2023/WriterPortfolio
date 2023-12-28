import React from 'react';

interface ImageBoxProps {
//     imageUrl: string;
    altText: string;
}

//pass imageUrl along with altText 
const ImageBox: React.FC<ImageBoxProps> = ({ altText }) => {
    return (
        <div className="m-4 shadow-lg border-4 border-gray-800 bg-white">
            <div className="bg-red-500 h-64 w-full" aria-label={altText}> </div>
            </div>
    )
}
 export default ImageBox;


/* <img src={imageUrl} alt={altText} className="w-full" /> */  