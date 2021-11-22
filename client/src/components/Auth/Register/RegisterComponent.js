import '../../Auth/Auth.css'
const RegisterComponent = () => {

    return (
        <div><section id="register-page">
            <div className="boxing">

                <h2 className="heading">
                    Create a profile here
                </h2>

                <form className="card-form" method="post">
                    <div className="input">
                        <input type="text" className="input-field" placeholder="ivan" id="username" name="username" value="" />
                        <label className="username">Username</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="ivan@gmail.com" id="email" name="email" value="" />
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
                        <input type="color" className="input-field" id="html5colorpicker" onchange="clickColor(0, -1, -1, 5)" value="#ff0000" style={{ width: '30px', height: '30px' }} />
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