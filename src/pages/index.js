import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import FAQ from '@theme/FAQ';
import Features from '@theme/Features';
import Hero from '@theme/Hero';
import Resources from '@theme/Resources';
import Download from '@theme/Download';

import styles from './styles.module.scss';

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Home" description="Home | Runlet">
      <Hero />

      <main>
        <Features />
        <Download />
        <Resources />
        <FAQ />
      </main>
    </Layout>
  );
}

export default Home;
