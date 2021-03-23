import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/Login";
import Posts from "./components/Posts/Posts";
import CreatePost from "./components/Posts/Post/CreatePost";
import Profile from "./components/User/Profile";
import SinglePost from "./components/Posts/Post/SinglePost";

import { AuthProvider } from "./components/context/auth";
import AuthRoute from "./components/util/AuthRoute";

import { AuthProvider } from "./components/context/auth";
import AuthRoute from "./components/util/AuthRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <AuthRoute path="/" component={Header} />

          <AuthRoute exact path="/posts/:postId" component={SinglePost} />

          <AuthRoute exact path="/" component={Posts} />
          <AuthRoute exact path="/create-post" component={CreatePost} />
          <AuthRoute exact path="/profile" component={Profile} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <AuthRoute path="/" component={Footer} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App