import React from 'react';

const Projects = () => (
    <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="card-container">
            <div className="card">
                <h3>TestRail Automation Tool</h3>
                <p>Won an organization hackathon by developing a tool with Java and APIs to auto-update test cases in TestRail, significantly improving test management efficiency.</p>
            </div>
            <div className="card">
                <h3>Tampermonkey Scripts</h3>
                <p>Created two custom Tampermonkey scripts to automate and streamline repetitive QA tasks, reducing manual effort and enhancing test efficiency.</p>
            </div>
        </div>
    </section>
);

export default Projects;