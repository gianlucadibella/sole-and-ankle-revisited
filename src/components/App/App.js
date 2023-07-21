import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../../constants';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
    <ThemeProvider theme={THEME}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media (${p => p.theme.queries.tabletAndSmaller}) {
    
  };
`;

export default App;
