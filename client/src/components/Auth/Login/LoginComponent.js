import '../../Auth/Auth.css';
const LoginComponent = () => {

    return (
        <div><section id="register-page">
            <div className="boxing">

                <h2 className="heading">
                    Login to the platform
                </h2>

                <form className="card-form" method="post">
                    <div className="input">
                        <input type="text" className="input-field" placeholder="ivan@gmail.com" id="email" name="email" value="" />
                        <label className="email">Email</label>
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