import React from 'react';
import styled from 'styled-components';
import { SelectConverter } from 'components/SelectConverter';
import { TabConverter } from 'components/TabConverter';
import { COLOR } from 'constants';

const MainPage = () => {
  return (
    <Container>
      <SelectConverter />
      <TabConverter />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLOR.BACKGROUND};
`;

export default MainPage;
