import "./Login.css";
import logo from "../Assets/HrSimpliLogo.jpeg";
import { TiStar } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

function Login() {
  const [logInState, setLogInState] = useState({
    passwordEye: false,
    emailValue: "",
    passwordValue: "",
  });
  function handlePassword(e) {
    setLogInState({
      ...logInState,
      passwordValue: e.target.value,
    });
  }
  function handleSubmit() {
    if (logInState.emailValue !== "" && logInState.passwordValue !== "") {
      setLogInState({
        ...logInState,
        emailValue: "",
        passwordValue: "",
      });
    }
  }
  return (
    <>
      <section className="signin_Section">
        <div className="signin_boxs">
          <div className="signIn_image">
            <p className="img_line">
              hire the <span className="best_talent">best talent</span> <br />
              <span className="team_Para">for your team!</span>
            </p>
          </div>
          <div className="signIn_form">
            <div className="logo_companay">
              <img src={logo} alt="companay logo" width="100%" />
            </div>
            <div className="create_account">
              <h3 className="create_account_heading">
                <span>L</span>og in
              </h3>
              <div className="create_para_logo">
                <p className="create_para">hire talents and teams</p>
                <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-23.png"
                  alt="search logo"
                  width="100%"
                />
              </div>
              {/* form */}
              <form onClick={(e) => e.preventDefault()}>
                <label className="label">
                  Work Email <TiStar className="star_icon" />
                </label>
                <input
                  type="email"
                  value={logInState.emailValue}
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="email"
                  onChange={(e) =>
                    setLogInState({
                      ...logInState,
                      emailValue: e.target.value,
                    })
                  }
                  required
                />
                <div className="password_box">
                  <label className="label">
                    Password <TiStar className="star_icon" />
                  </label>
                  <input
                    type={logInState.passwordEye === true ? "text" : "password"}
                    value={logInState.passwordValue}
                    name="password"
                    id="password"
                    autoComplete="off"
                    className="password"
                    pattern="(?=.*\d)(?=.*?[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[!@#$%^&*+`~=?\|<>/]).{8,}"
                    title="Minimum of 8 characters with 1 uppercase, 1 lowercase, 1
                    number and 1 special character"
                    required
                    onChange={(e) => handlePassword(e)}
                  />
                  {logInState.passwordEye === true ? (
                    <HiEyeOff
                      className="password_eye"
                      onClick={() =>
                        setLogInState({
                          ...logInState,
                          passwordEye: !logInState.passwordEye,
                        })
                      }
                    />
                  ) : (
                    <HiEye
                      className="password_eye"
                      onClick={() =>
                        setLogInState({
                          ...logInState,
                          passwordEye: !logInState.passwordEye,
                        })
                      }
                    />
                  )}
                  <div className="rememberMe_forgotPassword">
                    <div className="remberAndlabel">
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                    <label className="rememberMe">Remember me</label>
                    </div>
                    <p className="forgot_password">Forgot your password?</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="create_btn"
                  onClick={handleSubmit}>
                  log in
                </button>
              </form>
              <div className="orSignInOptions">
                <div className="horizontal_line"></div>
                <p className="signUp_option">Or Log in with</p>
                <div className="horizontal_line"></div>
              </div>
              <div className="signIn_icons">
                <div className="first_icons_div logo_icons">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="google logo"
                    width="100%"
                    className="sign_icons"
                  />
                </div>
                <div className="second_icons_div logo_icons">
                  <img
                    src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                    alt="google logo"
                    width="100%"
                    className="sign_icons"
                  />
                </div>
                <div className="third_icons_div logo_icons">
                  <img
                    src="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png"
                    alt="google logo"
                    width="100%"
                    className="sign_icons"
                  />
                </div>
              </div>
              <div className="have_account">
                <p className="have_account_heading">No account?</p>
                <NavLink to="/signin">Create Account</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
