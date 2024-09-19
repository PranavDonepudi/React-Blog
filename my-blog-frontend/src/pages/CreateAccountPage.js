import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import './CreateAccountPage.css';  // Import the CSS file

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

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Password and confirm password do not match');
                return;
            }

            // Use getAuth(app) to ensure Firebase app is used
            await createUserWithEmailAndPassword(getAuth(app), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div className="container">
            <h1 className="heading">Create Account</h1>
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
            <input
                className="input"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} 
            />
            <button className="button" onClick={createAccount}>
                Create Account
            </button>
            <Link className="link" to="/login">Already have an account? Log in here</Link>
        </div>
    );
}

export default CreateAccountPage;
