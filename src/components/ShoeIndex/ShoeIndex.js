import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {

  const ShoeBreadCrumbs = () => {
     
    return (
<Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
    )

  }

  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadCrumbWrapper>
          <ShoeBreadCrumbs />
          </MobileBreadCrumbWrapper>
          <Title>Running</Title>
          </div>
          <FilterWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
          </FilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbWrapper>
        <ShoeBreadCrumbs />
        </DesktopBreadcrumbWrapper>
        <Filler size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const DesktopBreadcrumbWrapper = styled.div`
  display: revert;

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    display: none;
  }
`

const MobileBreadCrumbWrapper = styled.div`
  display: none;

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    display: revert;
  };
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (${p => p.theme.queries.tabletAndSmaller}) {
    flex-direction: column-reverse;
  };
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    flex-basis: revert;
  };

`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    align-items: flex-end;
  };
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const Filler = styled(Spacer)`

  @media screen and (${p => p.theme.queries.tabletAndSmaller}) {
    display: none;
  }
`;

const FilterWrapper = styled.div`

  @media screen and (${p => p.theme.queries.phoneAndSmaller}) {
    display: none;
  }

`;

export default ShoeIndex;
