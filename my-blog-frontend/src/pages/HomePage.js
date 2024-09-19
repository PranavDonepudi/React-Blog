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
                When I’m not immersed in software development or exploring the latest advancements in AI, I enjoy pursuing a variety of interests that keep me balanced and inspired. I’m passionate about photography, capturing unique perspectives through the lens, and often enjoy combining it with my love for travel. 
                Whether it’s hiking in nature or exploring new cities, I’m always looking for new experiences that fuel my creativity.
                I also enjoy reading about technology trends and how they shape the future, as well as exploring innovations in media platforms and real-time interactions. In my downtime, I like playing strategy-based games, which sharpen my problem-solving skills while offering a fun break from work.
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
