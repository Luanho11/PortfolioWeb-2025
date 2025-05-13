import React from 'react';
import './CVDownloadButton.css';

const CVDownloadButton = () => {
    return (
        <a href={'${process.env.PUBLIC_URL}/CV_HostosLuis_Developer.pdf'}
        target = "_blank"
        rel = "noopener noreferrer">
            <button className="download-btn">Ver CV</button>
        </a>
    )
}

export default CVDownloadButton 
