import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Countdown from '@site/src/components/Countdown';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
          <div className="col">
            <Countdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section>
          <div className="container">
              <br />
              <h2>JP's Corner ʕ •ᴥ•ʔ</h2>
              <p><i>Hello! I'm JP, the choir TA! In this corner of the site (exact corner subject to change), I'll post briefly what I'm working on!</i></p>
              <p><b>Currently working on:</b> I'm working backward from Alfred's Essentials of Music Theory Book 3 to add some supplementary content! This is the first content area to add to the site, so it might take awhile. You might also notice links changing, breaking, moving, and updating pretty rapidly! As this section is finished, the links will become more stable.</p>
              <p>I'm so excited to be working with you this year! If you have any questions or feedback, please email me at <a href="mailto:jpkerrane01@bvsd.org">jpkerrane01@bvsd.org</a>!</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
