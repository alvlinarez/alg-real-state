import React from 'react';
import Icons from './icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

const PropertyContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

const Sidebar = styled.aside`
  .price {
    font-size: 2rem;
    color: #75ab00;
  }
  .agent {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #ffffff;
    p {
      margin: 0;
    }
  }
`;

export const query = graphql`
  query($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        name
        description
        wc
        parking
        rooms
        price
        agent {
          name
          phone
          email
        }
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

const Properties = ({
  data: {
    allStrapiProperties: { nodes },
  },
}) => {
  const {
    name,
    description,
    wc,
    parking,
    rooms,
    agent,
    image,
    price,
  } = nodes[0];
  return (
    <Layout>
      <h1>{name}</h1>
      <PropertyContent>
        <main>
          <Image fluid={image.sharp.fluid} />
          <p>{description}</p>
        </main>
        <Sidebar>
          <p className='price'>$ {price}</p>
          <Icons wc={wc} parking={parking} rooms={rooms} />
          <div className='agent'>
            <h2>Seller: </h2>
            <p>{agent.name}</p>
            <p>Phone: {agent.phone}</p>
            <p>Email: {agent.email}</p>
          </div>
        </Sidebar>
      </PropertyContent>
    </Layout>
  );
};

export default Properties;
