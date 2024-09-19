import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';  // Import Firebase App
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css';  // Import the CSS file

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEjFWgS0aoSYIjwqe7c2zHUrslCvqeDQM",
  authDomain: "my-react-blog-c3746.firebaseapp.com",
  projectId: "my-react-blog-c3746",
  storageBucket: "my-react-blog-c3746.appspot.com",
  messagingSenderId: "41373255080",
  appId: "1:41373255080:web:67df4fdf0a66c073fbc99d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            // Use getAuth() after Firebase has been initialized
            await signInWithEmailAndPassword(getAuth(app), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div className="container">
            <h1 className="heading">Log In</h1>
            {error && <p className="error">{error}</p>}
            <input
                className="input"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />

            <input
                className="input"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)} 
            />

            <button className="button" onClick={logIn}>
                Log In
            </button>

            <Link className="link" to="/create-account">Don't have an account? Create one here</Link>
        </div>
    );
}

export default LoginPage;
