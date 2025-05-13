import React from 'react';
import './CVDownloadButton.css';

const CVDownloadButton = () => {
    return (
        <a href='${process.env.PUBLIC_URL}/CV_HostosLuis_Developer.pdf' download>
            <button className="download-btn">Descargar CV</button>
        </a>
    )
}

export default CVDownloadButton 
