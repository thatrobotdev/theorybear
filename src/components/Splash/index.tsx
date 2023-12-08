import React from 'react';
import Link from '@docusaurus/Link';

export default function Splash(): JSX.Element {

let splashMessages = [
  ["You've got this!", "JP"],
  ["Need more cowbell!", "JP"],
  ["Beary fun music theory ;)", "JP"],
  ["Every Good Bear Does Fine", "JP"],
  ["FACE!!!!!", "JP"],
  ["Arctic Cubs Explore Glaciers :)", "JP"]
];
  
var randomSplash = Math.floor(Math.random() * splashMessages.length);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/img/logo.svg" alt="Countdown" height="100" />
          </div>
          <div className="col">
            <p>{splashMessages[randomSplash][0]}</p>
            <p>
              <sub>
                <Link to="/docs/how-to-contribute/tutorials/how-to-add-splash-message">
                  Submitted by {splashMessages[randomSplash][1]}
                </Link>
              </sub>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}