import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Route path="/" exact component={Posts} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
