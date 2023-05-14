import React, {useState, useEffect} from "react";
import axios from "axios";
import Picture from "./Picture";
import './Gallery.css';
import { v4 as uuidv4 } from 'uuid';


const Gallery = () => {

    const [gallery, setGallery] = useState();

    useEffect(() => {
        const baseURL = "http://127.0.0.1:8000/api/gallery"

        axios.get(baseURL).then((response) => {
            setGallery(
                response.data.map((item)=>{
                    return <Picture
                        key={uuidv4()}
                        src={item.src}
                        title={item.title}
                    />
                })
            )
        });

    }, []);


    return (
        <div className="gallery">

            {gallery}

        </div>
    )

};

export default Gallery;