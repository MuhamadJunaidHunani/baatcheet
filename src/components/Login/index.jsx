import React, { useState } from 'react';
import './style.css'; // Ensure to import your CSS styles
import { Link } from 'react-router-dom';

const Login = () => {
    //   const [showPassword, setShowPassword] = useState(false);
    //   const [showSignup, setShowSignup] = useState(false);

    //   const handlePasswordToggle = () => {
    //     setShowPassword(!showPassword);
    //   };

    //   const handleLinkClick = (e) => {
    //     e.preventDefault();
    //     setShowSignup(!showSignup);
    //   };

    return (
        <div className="main">
            <div class="container">
                <div class="wrapper">
                    <div class="title"><span>Login Form</span></div>
                    <form action="#">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Email or Phone" required />
                        </div>
                        <div class="row">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div class="pass"><a href="#">Forgot password?</a></div>
                        <div class="row button">
                            <input type="submit" value="Login" />
                        </div>
                        <div class="signup-link">Not a member? <Link to="/signup">Signup now</Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
