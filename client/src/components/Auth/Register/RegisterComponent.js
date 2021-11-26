import '../../Auth/Auth.css'
import { useState } from 'react';

const RegisterComponent = () => {

    const [userInfo, setUserInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegisterFormSubmit = e => {
        e.preventDefault();

        // const { username, email, password, rePassword,color } = e.target;

        // //TODO apply validation on these
        // const usernameValue = username.value;
        // const emailValue = email.value;
        // const passwordValue = password.value;
        // const rePasswordValue = rePassword.value;
        // const colorValue=color.value;


        // const inputsArr = [usernameValue, emailValue, passwordValue];

        console.log(e.target.color.value);
    }
    return (
        <div><section id="register-page">
            <div className="boxing">

                <h2 className="heading">
                    Create a profile here
                </h2>

                <form className="card-form" onSubmit={handleRegisterFormSubmit}>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="ivan98" id="username" name="username" />
                        <label className="username">Username</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="ivan@gmail.com" id="email" name="email"  />
                        <label className="email">Email</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="password" name="password" placeholder="******" />
                        <label className="password">Password</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="re-password" name="rePassword" placeholder="******" />
                        <label className="re-password">Repeat Password</label>
                    </div>
                    <div className="input">
                        <input type="color" className="input-field" id="html5colorpicker" name='color' onChange={()=>{'clickColor(0, -1, -1, 5)'}}  style={{ width: '30px', height: '30px' }} />
                        <label className="color">Choose your color</label>
                        <label className="color-note"></label>
                    </div>
                    <div className="action">
                        <button className="action-button">Get started</button>
                    </div>
                </form>

                <div className="card-info">
                    <small>Already have an account?<a href="/auth/login"> Sign in</a>
                    </small>
                </div>

            </div>
        </section>




        </div>
    );
}

export default RegisterComponent;