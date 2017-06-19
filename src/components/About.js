import React from 'react';
import pp from '../../public/parrot.gif';

const About = () => {
  return (
    <div className="About">
      <h3>About Page</h3>
      <p>
        This application was made in order to practically apply the knowledge
        I learnt from the Webpack's documentation on their
        <a href="https://webpack.js.org"> official website </a>
      </p>

      <div className="ApplicationFeatures">
        <h2>This application supports many amazing features</h2>
        <h4>
          <ul>
            <li>Code Splitting</li>
            <li>Common Chunks Splitting</li>
            <li>Externals in Production mode</li>
            <li>
              Separate Webpack configuration environment for both
              production and development
            </li>
            <li>And many more....</li>
          </ul>
        </h4>
      </div>
      <h3>
        Checkout the source code of the project
        on <a href="https://github.com/abdulhannanali/github-organization-repos/">Github</a>
      </h3>

      <h1>And now for a parrot dance</h1>
      <ManyParrots number={10} />
    </div>
  );
};

const ManyParrots = ({ number = 20 }) => {
  const parrots = [];
  for (let i = 0; i < number; i++) {
    parrots.push(
      <img src={pp} alt="party parrot" />
    );
  }

  return (
    <div className="ManyParrots">
      {parrots}
    </div>
  );
};

export default About;