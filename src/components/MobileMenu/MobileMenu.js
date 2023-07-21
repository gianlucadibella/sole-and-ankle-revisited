/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  const handleDismiss = () => {
    onDismiss();
  };

  return (
    <Wrapper isOpen={isOpen} onDismiss={handleDismiss}>
      <Content aria-label="mobile-menu">
        <CrossButton onClick={onDismiss}>
          <Icon id={"close"} size={24} color={"black"} />
        </CrossButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-700-80);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: calc(22 - 6)px;
`;          

const NavLink = styled.a`
   text-decoration: none;
   color: var(--gray-900);
   font-size: 1.125rem;
   text-transform: uppercase;

   &:first-of-type {
    color: var(--secondary); 
  }

`;

const FooterLink = styled(NavLink)`
  text-transform: capitalize;
  font-size: 0.875rem;
  color: var(--gray-700); 

  &:first-of-type {
    color: var(--gray-900);
  }

`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CrossButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

export default MobileMenu;
