import React from 'react';
import {useEffect, useState} from 'react';

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();


        async function fetchPhoto () {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=ezurUALDCdnVuZzY1VutnueWsnuhzkCGiEjnVDmg`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if(!photoData) return <div />

    return (
        <>
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} className="photo"/>
            ) : (
                <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
        </>

    );
}