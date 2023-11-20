/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a
        href="https://github.com/Spartan-119/CV/blob/main/Abin%20Varghese%20Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV/Resume
      </a>
      <a href="https://medium.com/@abin_varghese" target="_blank" rel="noopener noreferrer">
        Blogs
      </a>
      <a
        href="https://www.youtube.com/watch?v=cZsRlcJSYgI&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Applied Privacy Podcast
      </a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;