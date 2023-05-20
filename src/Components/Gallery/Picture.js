import React from "react";

const Picture = (props) => {

    const baseGalleryUrl = process.env.REACT_APP_API_BASE_URL + "upload/images/gallery/";


    return (
        <div className="content-img">
            <img src={baseGalleryUrl + props.src}/>
            <p>{props.title}</p>
        </div>
    )

};

export default Picture;