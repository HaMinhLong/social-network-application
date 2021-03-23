import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SIGN_UP_USER } from "../util/graphql";

import { useMutation } from "@apollo/client";
import { useForm } from "../util/hooks";

import { AuthContext } from "../context/auth";

const SignUp = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    email: "",
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [addUser, { loading }] = useMutation(SIGN_UP_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);

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
                By signing up, you agree to our{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://help.instagram.com/581066165581870"
                >
                  Terms
                </a>{" "}
                ,{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://help.instagram.com/519522125107875"
                >
                  Data Policy
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://help.instagram.com/1896641480634370?ref=ig"
                >
                  Cookies Policy
                </a>{" "}
                .
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              >
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt=""
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE3FA050E-ADCF-439C-BEE2-69969DB7B0DE%26utm_content%3Dlo%26utm_medium%3Dbadge"
              >
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-sign-up">
          <div className="footer-sign-up-first">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://about.instagram.com/"
            >
              About
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://about.instagram.com/en_US/blog"
            >
              Blog
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://about.instagram.com/about-us/careers"
            >
              Jobs
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://help.instagram.com/"
            >
              Help
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/developer/"
            >
              API
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://help.instagram.com/519522125107875"
            >
              Privacy
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://help.instagram.com/581066165581870"
            >
              Terms
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/directory/profiles/"
            >
              Top Accounts
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/directory/hashtags/"
            >
              Hashtags
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/explore/locations/"
            >
              Locations
            </a>
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
