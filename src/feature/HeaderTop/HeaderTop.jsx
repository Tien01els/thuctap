import "./HeaderTop.css";
import { useState } from "react";

function HeaderTop() {
    const [toggleModal, setToggleModal] = useState("modal js-modal");
    const handleToggleModal = () => {
        setToggleModal((toggleModal) => {
            if (toggleModal === "modal js-modal") {
                return toggleModal + " open";
            }
            return "modal js-modal";
        });
    };

    const [toggleActive, setToggleActive] = useState("");
    const handleToggleActive = () => {
        setToggleActive((toggleActive) => {
            if (toggleActive === "") {
                return "active";
            }
            return "";
        });
    };

    return (
        <div className="HeaderTop">
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"></link>
            <div className="header-left">
                <a href="/">
                    <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v617/v2_2019/pc/graphics/logo.svg" alt="vnexpress" />
                </a>
            </div>
            <div className="header-right">
                <button className="btn-header">
                    Mới nhất
                    <i className="ri-time-line"></i>
                </button>
                <button className="btn-header">International</button>
                <form action="GET" className="form-search">
                    <input className="input-search" type="text" placeholder="Tìm kiếm"></input>
                    <button className="btn-search" type="button">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
                <button className="btn-modal" onClick={handleToggleModal}>
                    Đăng nhập
                    <i className="icon ri-user-3-fill"></i>
                </button>
            </div>

            <div className={toggleModal}>
                <div className="login-register-container">
                    <div className="heading">
                        <div className={"login " + toggleActive} onClick={handleToggleActive}>
                            <h1>Login</h1>
                        </div>
                        <div className={"register " + toggleActive} onClick={handleToggleActive}>
                            <h1>Register</h1>
                        </div>
                    </div>
                    <div className={"login-container " + toggleActive}>
                        <form action="" className="form-login mt-24">
                            <div className="form-group mt-8">
                                <div className="form-content-input">
                                    <i className="icon ri-user-3-line"></i>
                                    <input type="text" id="username-login" className="form-input" required />
                                    <label htmlFor="username-login" className="form-label">
                                        Username
                                    </label>
                                    <br />
                                </div>
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group mt-24">
                                <div className="form-content-input">
                                    <i className="icon ri-lock-2-line"></i>
                                    <input type="password" id="password-login" className="form-input" required />
                                    <label htmlFor="password-login" className="form-label">
                                        Password
                                    </label>
                                    <br />
                                </div>
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group mt-32">
                                <input type="checkbox" name="remember-me" id="remember-me" className="form-checkbox" />
                                <label htmlFor="remember-me" className="form-label text-remember">
                                    Remember Me
                                </label>
                            </div>
                            <div className="form-group btn btn-login mt-32">
                                <div className="inner"></div>
                                <input type="submit" value="LOGIN" className="form-btn" />
                            </div>
                        </form>
                        <div className="center mt-32">
                            <hr />
                            <span> Or Sign In Using </span>
                            <hr />
                        </div>
                        <div className="icon-group mt-16">
                            <i className="icon ri-google-fill"></i>
                            <i className="icon ri-facebook-circle-fill"></i>
                            <i className="icon ri-apple-fill"></i>
                        </div>
                        <div className="forgot-password-content">Forgot password?</div>
                    </div>
                    <div className={"register-container " + toggleActive}>
                        <form action="" className="form-register mt-24">
                            <div className="form-group mt-8">
                                <div className="form-content-input">
                                    <i className="icon ri-user-3-line"></i>
                                    <input type="text" id="username-register" className="form-input" required />
                                    <label htmlFor="username-register" className="form-label">
                                        Username
                                    </label>
                                    <br />
                                </div>
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group mt-16">
                                <div className="form-content-input">
                                    <i className="icon ri-mail-line"></i>
                                    <input type="text" id="email-register" className="form-input" required />
                                    <label htmlFor="email-register" className="form-label">
                                        Email
                                    </label>
                                    <br />
                                </div>
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group mt-16">
                                <div className="form-content-input">
                                    <i className="icon ri-lock-2-line"></i>
                                    <input type="password" id="password-register" className="form-input" required />
                                    <label htmlFor="password-register" className="form-label">
                                        Password
                                    </label>
                                    <br />
                                </div>
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group mt-16">
                                <div className="form-content-input">
                                    <i className="icon ri-rotate-lock-line"></i>
                                    <input type="password" id="confirm-password" className="form-input" required />
                                    <label htmlFor="confirm-password" className="form-label">
                                        Confirm password
                                    </label>
                                    <br />
                                </div>
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group btn btn-register mt-40">
                                <div className="inner"></div>
                                <input type="submit" value="REGISTER" className="form-btn" />
                            </div>
                        </form>
                        <div className="center mt-32">
                            <hr />
                            <span> Or Sign Up Using </span>
                            <hr />
                        </div>
                        <div className="icon-group mt-16">
                            <i className="icon ri-google-fill"></i>
                            <i className="icon ri-facebook-circle-fill"></i>
                            <i className="icon ri-apple-fill"></i>
                        </div>
                    </div>
                    <div className="icon-close" onClick={handleToggleModal}>
                        <i className="ri-close-line"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
