import React from "react";
import './HomePage.css';  // Import CSS file

const HomePage = () => (
    <>
        <div className="homepage-container">
            <h1 className="homepage-title">Hello, welcome to my website!!</h1>
            <p className="homepage-description">
                Explore my portfolio to see how I combine technical knowledge with creativity to solve complex problems and drive impactful results.
                With a strong foundation in backend and frontend development, my work spans across various domains, including media platforms, AI integration, and data-driven analysis. 
                My technical skills encompass a broad range of tools, including Python, JavaScript, React, and Node.js, and I’ve delivered projects in areas like system validation, machine learning, and real-time interactive technologies.
            </p>
            <p className="homepage-description">
        <strong>Beyond Coding:</strong> <br />

        When I’m not immersed in software development or exploring the latest advancements in AI, I enjoy spending my time engaging in various activities that keep me balanced and motivated. 
        I’m passionate about playing tennis, which helps me stay active and sharp, both mentally and physically. 
        I also have a deep interest in movies, constantly learning more about the art of filmmaking and storytelling. 
        Traveling is another pursuit I love, as it allows me to explore new places and cultures, fueling my sense of adventure and curiosity. 
        Additionally, I have a strong inclination towards books and reading, constantly exploring new ideas and gaining knowledge across different subjects.
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

export default HomePage;
