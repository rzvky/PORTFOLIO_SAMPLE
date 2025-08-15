import React from 'react';

const Resume = () => (
    <div>
        <h2>My Resume</h2>
        <iframe src="/Vicky Kumar Resume.pdf" className="resume-viewer" title="Vicky Kumar Resume"></iframe>
        <a href="/Vicky Kumar Resume.pdf" download className="download-button">Download Resume</a>
    </div>
);

export default Resume;