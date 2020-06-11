import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  padding: .5rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  &.current-page {
    border-bottom: 2px solid #ffffff;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLink to={'/about-us'} activeClassName="current-page">About Us</NavLink>
      <NavLink to={'/properties'} activeClassName="current-page">Properties</NavLink>
    </Nav>
  );
};

export default Navigation;
