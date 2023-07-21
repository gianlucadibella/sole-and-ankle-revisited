import React from "react";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon/Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:  

  return (
      <header>
        <SuperHeader />
        <MainHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
            <NavLink href="/women">Dogs</NavLink>
            <NavLink href="/kids">Cats</NavLink>
            <NavLink href="/collections">Birds</NavLink>
          </Nav>
          <MobileActions>
              <ShoppingBagButton>
                <Icon id="shopping-bag" strokeWidth={1} size={24} />
                <VisuallyHidden>Open Cart</VisuallyHidden>
              </ShoppingBagButton>
              <UnstyledButton>
                <Icon id="search" strokeWidth={1} size={24} />
                <VisuallyHidden>Search</VisuallyHidden>
              </UnstyledButton>
              <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                <Icon id="menu" strokeWidth={1} size={24}  />
                <VisuallyHidden>Menu</VisuallyHidden>
              </UnstyledButton>
          </MobileActions>
          <Filler />
        </MainHeader>

        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
      </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--gray-300);
  overflow-x: auto;

  @media (${p => p.theme.queries.tabletAndSmaller}) {    
    border-top: 4px solid var(--gray-900);
    justify-content: space-between;
    align-items: center;
  };

  @media (${p => p.theme.queries.phoneAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  };

`;

const Nav = styled.nav`
  display: flex;
  gap:  clamp(
    1rem,
    7.8vw - 3.75rem,
    3rem
  );
  margin: 0px 48px;

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    display: none;
  };

`;

const LogoWrapper = styled.div`
  flex: 1;

  @media (${p => p.theme.queries.tabletAndSmaller}){
    flex: revert;
  };
`;

const Filler = styled.div`
  flex : 1;
  
  @media (${p => p.theme.queries.tabletAndSmaller}){
    display: none;
  };

`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

const MobileActions = styled.nav`
  display: none;

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  };
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

export default Header;
