import React, {useEffect, useRef, useState} from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imgRef = useRef(null);

    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imgRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const scrollHandler = () => {
        setInView(isInView());
    };

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    return (
        <img
            src={isLoading ? 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif' : inView ? secondaryImg : primaryImg}
            alt=''
            ref={imgRef}
        />
    );
};

export default ImageToggleOnScroll;