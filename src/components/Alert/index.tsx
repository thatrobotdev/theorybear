import React from 'react';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

export default function Alert(): JSX.Element {
    return (
        <section className="container">
            <Admonition type="info" icon="🐻" title="Fat Bear Week 2023">
                    <p>It's Fat Bear Week! Meet the bears and <a href="https://explore.org/fat-bear-week" target="_blank" rel="noreferrer">vote for your favorite!</a></p>
                    <details>
                        <summary>Live Bear Cam</summary>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HsLvnFQW_yM?si=tEIsx_yPzy0sa7rZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </details>
            </Admonition>
        </section>  
    );
}
