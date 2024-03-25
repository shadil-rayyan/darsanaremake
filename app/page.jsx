'use client'
import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Header>
      <LogoWrapper>
        <img srcSet="..." alt="Logo" />
      </LogoWrapper>
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <Menu>
          <MenuItem>Key Initiatives</MenuItem>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c770b4493737ffb8b64c2f65e025409209ef4d1af410a24183581a553e3edd5c?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Key Initiatives" />
        </Menu>
        <Menu>
          <MenuItem>Other Initiatives</MenuItem>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e17c38ebcb594b314335c67ebc9cf1ef4d94af97c3792884d80c24cb92d47e?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Other Initiatives" />
        </Menu>
        <Menu>
          <MenuItem>Product</MenuItem>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/04611a95d6f78e283ccad51d12e866cfec3b6772824be7193e8f37c3ed3039c3?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Product" />
          <MenuItem>Activities</MenuItem>
        </Menu>
        <NavLink>Contact Us</NavLink>
      </Nav>
      <SignInButton>Sign In</SignInButton>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
  img {
    width: 157px;
    max-width: 100%;
    @media (max-width: 768px) {
      width: 90px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: #f9f9f9;
  border-radius: 40px;
  padding: 22px 45px;
  font-size: 16px;
  color: #242331;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.div`
  font-family: Nunito, sans-serif;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const MenuItem = styled.div`
  font-family: Nunito, sans-serif;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 12px;
`;

const SignInButton = styled.button`
  background-color: #1388ca;
  color: white;
  border-radius: 30px;
  padding: 10px 25px;
  font: 800 20px/144% Roboto, sans-serif;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #1177b8;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export default NavBar;