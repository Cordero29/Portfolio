import React, { Component } from "react";
import "./styles/App.css";

import Animation from "./components/Animation";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Animation />
        <Header />
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}
