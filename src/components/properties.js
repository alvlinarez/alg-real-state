import React from 'react';
import Icons from './icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        name
        parking
      }
    }
  }
`;

const Properties = ({ data }) => {
  console.log(data);
  return (
    <Layout>Property</Layout>
  );
};

export default Properties;
