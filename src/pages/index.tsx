import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import Alert from '@site/src/components/Alert';
import JpsCorner from '@site/src/components/JPsCorner';
import Splash from '@site/src/components/Splash';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
          <div className="col">
            <Splash />
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://theorybear.org/docs/introduction"
              >
                {"Let's get studying!"}
              </Link>
            </div>
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
      description="A fun, supplemental guide to music theory education.">
      <Alert />
      <HomepageHeader />
      <main>
        <JpsCorner />
      </main>
    </Layout>
  );
}
