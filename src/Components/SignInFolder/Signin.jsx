import "./Signin.css";
import logo from "../Assets/HrSimpliLogo.jpeg";
import { TiStar } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

function Signin() {
  const [signInState, setSignInState] = useState({
    passwordEye: false,
    emailValue: "",
    passwordValue: "",
  });
  function handlePassword(e) {
    setSignInState({
      ...signInState,
      passwordValue: e.target.value,
    });
  };
  function handleSubmit() {
    if (signInState.emailValue !== "" && signInState.passwordValue !== "") {
      setSignInState({
        ...signInState,
        emailValue: "",
        passwordValue: "",
      });
    }
  };
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
                <span>C</span>reate <span>A</span>ccount
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
                  value={signInState.emailValue}
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="email"
                  onChange={(e) =>
                    setSignInState({
                      ...signInState,
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
                    type={
                      signInState.passwordEye === true ? "text" : "password"
                    }
                    value={signInState.passwordValue}
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
                  {signInState.passwordEye === true ? (
                    <HiEyeOff
                      className="password_eye"
                      onClick={() =>
                        setSignInState({
                          ...signInState,
                          passwordEye: !signInState.passwordEye,
                        })
                      }
                    />
                  ) : (
                    <HiEye
                      className="password_eye"
                      onClick={() =>
                        setSignInState({
                          ...signInState,
                          passwordEye: !signInState.passwordEye,
                        })
                      }
                    />
                  )}
                  <p className="password_pattern_details">
                    Minimum of 8 characters with 1 uppercase, 1 lowercase, 1
                    <br />
                    number and 1 special character
                  </p>
                </div>
                <button
                  type="submit"
                  className="create_btn"
                  onClick={handleSubmit}>
                  create account
                </button>
              </form>
              <div className="orSignInOptions">
                <div className="horizontal_line"></div>
                <p className="signUp_option">Or Sign up with</p>
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
              <div className="privacy_policy">
                <p className="privacy_para">
                  By signing up, you agree to our <span>terms of service</span>
                  <br /> and <span>privacy policy</span>.
                </p>
              </div>
              <div className="have_account">
                <p className="have_account_heading">Have an account?</p>
                <NavLink to="/login">Log in</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
