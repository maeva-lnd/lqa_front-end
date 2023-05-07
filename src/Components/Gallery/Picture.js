import React from "react";

const Picture = (props) => {

    const baseGalleryUrl = "http://127.0.0.1:8000/upload/images/gallery/"

    return (
        <div className="content-img">
            <img src={baseGalleryUrl + props.src}/>
            <p>{props.title}</p>
        </div>
    )

};

export default Picture;