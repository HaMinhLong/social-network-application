import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { useForm } from "../util/hooks";

import { LOGIN_USER } from "../util/graphql";

import { AuthContext } from "../context/auth";

const Login = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);

      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-image">
          <img
            src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"
            alt=""
          />
          <img
            id="img-in-img"
            src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
            alt=""
          />
        </div>
        <div className="login-form">
          <div className="form">
            <h1>Instagram</h1>
            <div>
              <form onSubmit={onSubmit} className={loading ? "loading" : ""}>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={onChange}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  values={values.password}
                  onChange={onChange}
                />
                <input
                  type="submit"
                  value={loading ? "Loading..." : "Log In"}
                />
                <div className="errors">
                  {Object.keys(errors).length > 0 && (
                    <div>
                      <ul>
                        {Object.values(errors).map((value) => (
                          <li key={value}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* <div className="or">
                  <span></span>
                  <p>OR</p>
                </div> */}
                <div className="forgot-password">
                  <Link to="/login">Forgot password?</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="route">
            <p>Don't have an account?</p>
            <Link to="sign-up">Sign Up</Link>
          </div>

          <div className="get-app">
            <p>Get the app.</p>
            <div>
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt=""
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="footer-login">
        <div className="footer-first">
          <Link to="/login">About</Link>
          <Link to="/login">Blog</Link>
          <Link to="/login">Jobs</Link>
          <Link to="/login">Help</Link>
          <Link to="/login">API</Link>
          <Link to="/login">Privacy</Link>
          <Link to="/login">Terms</Link>
          <Link to="/login">Top Accounts</Link>
          <Link to="/login">Hashtags</Link>
          <Link to="/login">Locations</Link>
        </div>
        <div className="footer-second">
          <Link to="/login">Beauty</Link>
          <Link to="/login">Dance & Performance</Link>
          <Link to="/login">Fitness</Link>
          <Link to="/login">Food & Drink</Link>
          <Link to="/login">Home & Garden</Link>
          <Link to="/login">Music</Link>
          <Link to="/login">Visual Arts</Link>
        </div>
        <div className="footer-third">
          <span>&copy;2021 Instagram from Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
