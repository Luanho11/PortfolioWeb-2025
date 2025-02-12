import React from 'react';
import './CVDownloadButton.css';

const CVDownloadButton = () => {
    return (
        <a href="/CV_HostosLuis_Developer.pdf" download="CV_HostosLuis_Developer.pdf">
            <button className="download-btn">Descargar CV</button>
        </a>
    )
}

export default CVDownloadButton 
