import React from "react";
import { Route } from "react-router-dom";
import Header from "./app/components/Header/Header";
import Footer from "./app/components/Footer/Footer";
import Register from "./app/pages/Register/Register";
import Login from "./app/pages/Login/Login";
import AboutPage from "./app/pages/About/AboutPage"
import "./App.css";
import PostsList from './app/pages/PostList/PostsList'


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Register} />
      <Route path='/login' component={Login} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path = '/posts' component = {PostsList} />
      <Footer />
    </div>
  );
}

export default App;
