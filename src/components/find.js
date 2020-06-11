import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const ImageBackground = styled(BackgroundImage)`
  height: 300px;
`;

const Find = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "encuentra.jpg"}){
        sharp: childImageSharp {
          fluid(maxWidth: 1500){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div className={heroCSS.imagebg}>
        <h3 className={heroCSS.title}>Find the house of your dreams</h3>
        <p>15 years of experience</p>
      </div>
    </ImageBackground>
  );
};

export default Find;
