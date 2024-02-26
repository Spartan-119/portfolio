/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hey yo! I'm an ex-Data Scientist and a privacy proponent, currently pursuing my MSc in Data Science at Kingston University.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python Software Development",
  "Data Science",
  "Machine Learning",
  "SQL",
  "Java",
  "Natural Language Processing",
  "Data Visualization",
  "Privacy Engineering",
  "ML Frameworks - Tensorflow, PyTorch, Scikit-Learn",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = (
  <span>
    Welcome to my data journey!
    <br />
    <br />
    I'm a former Data Scientist at Infosys, specializing in Python, data structures & algorithms,
    SQL, classical and deep Machine Learning, NLP, and statistical analysis. Currently pursuing an MSc in
    Data Science at Kingston University. I'm also a privacy advocate and host of the{" "}
    <a
      href="https://www.youtube.com/watch?v=cZsRlcJSYgI&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <u>Applied Privacy Podcast.</u>
    </a>{" "}
    Please explore my podcast to learn more about privacy engineering.<br></br>
    <br />
    I am into learning boxing these days. It was a mistake! Have been playing 🎸 for over 10 years.
    So, if you got a gig, ping me yeah🤘
    <br />I am also guilty of spending too much time PETTING DOGS.
  </span>
);

function About() {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          whiteSpace: "pre-line",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
}

export default About;