import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;
  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`;

const Icons = ({ wc, parking, rooms }) => {
  const { icons } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  const imgIcons = icons.edges;
  return (
    <IconList>
      <li>
        <img src={imgIcons[2].node.publicURL} alt="wc icon" />
        <p>{wc}</p>
      </li>
      <li>
        <img src={imgIcons[1].node.publicURL} alt="parking icon" />
        <p>{parking}</p>
      </li>
      <li>
        <img src={imgIcons[0].node.publicURL} alt="rooms icon" />
        <p>{rooms}</p>
      </li>
    </IconList>
  );
};

export default Icons;
