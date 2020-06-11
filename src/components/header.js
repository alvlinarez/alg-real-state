import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Navigation from './Navigation';

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <header
      css={css`
        background-color: #0d283d;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={'/'}>
          <img src={logo.publicURL} alt="logo"/>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
