import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGN_UP_USER } from "../util/graphql";

import { useMutation } from "@apollo/client";
import { useForm } from "../util/hooks";

const SignUp = (props) => {
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    email: "",
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [addUser, { loading }] = useMutation(SIGN_UP_USER, {
    update(_, result) {
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div>
      <div className="sign-up">
        <div className="sign-up-container">
          <div className="sign-up-first">
            <h1>Instagram</h1>
            <p>Sign up to see photos and videos from your friends.</p>
            <form onSubmit={onSubmit} className={loading ? "loading" : ""}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={onChange}
              />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={onChange}
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={onChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={onChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={onChange}
              />
              <input type="submit" value={loading ? "Loading..." : "Sign Up"} />
              <div className="errors">
                {Object.keys(errors).length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </form>
            <div className="something">
              <span>
                By signing up, you agree to our <Link to="/sign-up">Terms</Link>{" "}
                , <Link to="/sign-up">Data Policy</Link> and{" "}
                <Link to="/sign-up">Cookies Policy</Link> .
              </span>
            </div>
          </div>
          <div className="sign-up-second">
            <p>Have an account?</p>
            <Link to="/login">Log in</Link>
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
        <div className="footer-sign-up">
          <div className="footer-sign-up-first">
            <Link to="/sign-up">About</Link>
            <Link to="/sign-up">Blog</Link>
            <Link to="/sign-up">Jobs</Link>
            <Link to="/sign-up">Help</Link>
            <Link to="/sign-up">API</Link>
            <Link to="/sign-up">Privacy</Link>
            <Link to="/sign-up">Terms</Link>
            <Link to="/sign-up">Top Accounts</Link>
            <Link to="/sign-up">Hashtags</Link>
            <Link to="/sign-up">Locations</Link>
          </div>
          <div className="footer-sign-up-second">
            <span>&copy; 2021 Instagram from Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
