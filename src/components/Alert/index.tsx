import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

export default function Alert(): JSX.Element {
    return (
      <section className="container">
        {/* Fat Bear Week
            <Admonition type="info" icon="🐻" title="Fat Bear Week 2023">
                    <p>It's Fat Bear Week! Meet the bears and <a href="https://explore.org/fat-bear-week" target="_blank" rel="noreferrer">vote for your favorite!</a></p>
                    <details>
                        <summary>Live Bear Cam</summary>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HsLvnFQW_yM?si=tEIsx_yPzy0sa7rZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </details>
            </Admonition> 
            */}
        {/* Contributors */}
        {/* <Admonition type="info" icon="🐻" title="Accepting contributors!">
          <p>
            Are you a Hack Club, Tri-M, or CSHS member? We need you to improve
            this site! <a href="/docs/how-to-contribute/overview">Find out more here.</a>
          </p>
        </Admonition> */}
        {/* Orchestra Concert */}
        <Admonition type="info" icon="🐻" title="It's concert week!">
          <p>
            It's concert week! Check the <a href="/blog">blog</a> for more details about the upcoming concerts!
          </p>
        </Admonition>
      </section>
    );
}
