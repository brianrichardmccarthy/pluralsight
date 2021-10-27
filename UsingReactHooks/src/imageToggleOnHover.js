import React, {useRef} from "react";

const ImageToggleOnHover = ({primaryImg, secondaryImg}) => {
    const imgRef = useRef(null);
    return (
        <img
            onMouseOver={() => {
                imgRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imgRef.current.src = primaryImg;
            }}
            src={primaryImg}
            alt=''
            ref={imgRef}
            width={1000}
            height={1000}
        />
    );
};

export default ImageToggleOnHover;