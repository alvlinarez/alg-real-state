import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Form = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`;

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: 'Lato', sans-serif;
`;

const useFilterProperties = () => {
  const [ category, setCategory ] = useState('');
  const res = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `);
  const categories = res.allStrapiCategories.nodes;
  const FilterUI = () => {
    return (
      <Form>
        <Select
          onChange={e => setCategory(e.target.value)}
          value={category}
        >
          <option value="">-- Filter --</option>
          {
            categories.map(option => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))
          }
        </Select>
      </Form>
    );
  };
  return {
    category,
    FilterUI
  };
};

export default useFilterProperties;
