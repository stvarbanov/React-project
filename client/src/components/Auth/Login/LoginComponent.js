import '../../Auth/Auth.css';
import { login } from '../../../services/authRequest.js';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const LoginComponent = ({
    login
}) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    const handleLoginFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const body = {}
        formData.forEach((value, property) => body[property] = value)

        login(body)
            .then(res => res.json())
            .then(res => {
                if (res.type === 'error') {
                    setErrorMessage(res.message.errorMsg);
                } else {
                    setErrorMessage(null)
                    localStorage.setItem('user', JSON.stringify(res.user));
                    login(res.user);
                    navigate('/');   
                }
            });

    }

    return (
        <div><section id="register-page">
            <div className="boxing">

                <h2 className="heading">
                    Login to the platform
                </h2>

                <form className="card-form" onSubmit={handleLoginFormSubmit}>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="ivan98" id="username" name="username" />
                        <label className="username">Username</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="password" name="password" placeholder="******" />
                        <label className="password">Password</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Login</button>
                    </div>
                </form>

                <div className="card-info">
                    <small>No account?<a href="/auth/register">Register here</a>
                    </small>
                </div>

            </div>
        </section>

        </div>
    );
}

export default LoginComponent;