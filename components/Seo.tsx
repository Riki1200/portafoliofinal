import PropTypes from 'prop-types';
import Head from 'next/head';

const Seo = ({ currentPage }) => (
  <Head>
    <title>{`${currentPage} | Romeo Betances `}</title>
    <link rel='icon' href='/logo-40.png' />
    <meta name='description' content='Romeo Betances' />
    <meta name='keywords' content='Republica Dominican, Developer, HTML, ReactJS, NextJS' />
    <meta name='author' content='Romeo Betances' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta property='og:image' content='/about.png' />
  </Head>
);

Seo.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Seo;
