import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{
      padding: '4rem 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <h1 style={{fontSize: '2.5rem'}}>{siteConfig.title}</h1>
        <p style={{fontSize: '1.25rem', opacity: 0.8}}>{siteConfig.tagline}</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Overview
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description}: {title: string; description: string}) {
  return (
    <div style={{flex: 1, padding: '1rem'}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="Sketch-thru-Plan JavaScript SDK Documentation">
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0'}}>
          <div className="container">
            <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
              <Feature
                title="Multimodal Input"
                description="Combine speech and sketch to create military symbols. STP fuses these modalities for robust, natural interaction."
              />
              <Feature
                title="Plugin Architecture"
                description="Swap map providers, speech engines, and renderers. Use Leaflet, Google Maps, or ArcGIS. Choose Azure or AWS speech."
              />
              <Feature
                title="Collaboration Ready"
                description="Session-based architecture supports multiple users editing plans concurrently, with scenario management and role switching."
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
