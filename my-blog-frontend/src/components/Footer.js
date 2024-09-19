import React from 'react';
import './Footer.css'; // Assuming you'll add Footer-specific styles here

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
