import React from "react";
import './AboutPage.css';  // Import CSS for consistent styling

const AboutPage = () => {
    return (
        <>
            <div className="about-container">
                <h1 className="about-title">About Me</h1>
                <p className="about-description">
                    Earning my Master's degree from Rice University, I honed advanced software engineering skills, delving into machine learning and artificial intelligence.
                </p>
                <p className="about-description">
                    At SBS CORP, my focus lies in leveraging my expertise in JavaScript frameworks and Information and Communications Technology (ICT) to innovate and optimize application deployment.
                    With a passion for creating impactful user-centric software, I am eager to contribute to projects that challenge and expand my technical progress. Our team at DXC Technology thrived as I immersed myself in web application development, mastering JavaScript, HTML, CSS, and Node.js to deliver robust solutions to a diverse clientele.
                </p>
                <p className="about-description">
                    <strong>Skills and Expertise</strong><br/>
                    Programming Languages: JavaScript, HTML/CSS, Python, Java, C, C++, Maven<br/>
                    Tools & Frameworks: Numpy, Pytorch, Django, Git, Jupyter Notebook, Google Colab, React, Node.js<br/>
                    Database Management: MongoDB<br/>
                    Proficiency in QA Engineering: Skilled in system validation with a focus on Python-based automation and validation processes<br/>
                    Cloud Platforms: Google Cloud (experience with SDK and CLI tools)
                </p>

                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <ul>
                        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/pranavdonepudi07" target="_blank" rel="noopener noreferrer">linkedin.com/in/pranavdonepudi07</a></li>
                        <li><strong>Email:</strong> <a href="mailto:donepudipranav04@gmail.com">donepudipranav04@gmail.com</a></li>
                        <li><strong>Phone:</strong> +1 (650) 759-4788</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
