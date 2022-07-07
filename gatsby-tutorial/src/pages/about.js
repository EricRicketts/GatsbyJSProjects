import * as React from "react";
import { Link } from 'gatsby';

const About = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>Eric Ricketts</h1>
      <Link to="/">Back to Home Page</Link>
      <p>I am currently learning Gatsby for my work environment.</p>
    </main>
  );
}

export default About;