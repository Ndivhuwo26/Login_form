import React, { useState } from 'react';

const Login = () => {
    const [isLoginMode, setLoginMode] = useState(true);

    return (
        <div>
            <div>
                <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
            </div>

            {/* Tab controls*/}
            
            <div>
                <button onClick={() => setLoginMode(true)}>
                    Login
                </button>
                <button onClick={() => setLoginMode(false)}>
                    Sign Up
                </button>
                <div></div>
            </div>

        </div>
    );
};

export default Login;
