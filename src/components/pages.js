import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import PropertiesList from './propertiesList';

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

export const query = graphql`
  query($id:String!) {
    allStrapiPages(filter: {id: {eq: $id}}) {
      nodes {
        name
        content
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const Pages = ({
  data: {
    allStrapiPages: { nodes },
  },
}) => {
  const { name, content, image } = nodes[0];
  return (
    <Layout>
      <main className="container">
        <h1>{name}</h1>
        <PageContent>
          <Image fluid={image.sharp.fluid} />
          <p>{content}</p>
        </PageContent>
      </main>
      {
        name === 'Properties' && (
          <PropertiesList />
        )
      }
    </Layout>
  );
};

export default Pages;
