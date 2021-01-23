import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/Login";
import Posts from "./components/Posts/Posts";
import CreatePost from "./components/Posts/Post/CreatePost";
import Profile from "./components/User/Profile";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Posts} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/profile" component={Profile} />

        <Route exact path="/sign-up" component={SignUp} />

        <Route exact path="/login" component={Login} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
