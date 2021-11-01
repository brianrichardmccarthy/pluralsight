import React from "react";
import ImageToggleOnHover from "../../src/Chapter2/imageToggleOnHover";

const ImageHover = () => {
    return (
        <div>
            <ImageToggleOnHover primaryImg={'https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe.jpg'} secondaryImg={'https://images.unsplash.com/photo-1597913201593-522ed9bc1731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjAlMjYlMjB3aGl0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt='' />
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <ImageToggleOnHover primaryImg={'https://i.pinimg.com/originals/a1/3d/66/a13d66c3cb6901af406b14b7dbc73d17.jpg'} secondaryImg={'https://images.iphonephotographyschool.com/10819/1120/iPhone-Photos-Black-And-White-12.jpg'} alt='' />
        </div>
    )
};

export default ImageHover;