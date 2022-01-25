import React from 'react';
import styled from 'styled-components';
import { FormBox } from './FormBox';
import { ResultBox } from './ResultBox';

export const TabConverter = () => {
  return (
    <TabConverterContainer>
      <FormBox />
      <ResultBox />
    </TabConverterContainer>
  );
};

const TabConverterContainer = styled.div`
  width: 400px;
  height: 400px;
  padding: 30px;
  border: 5px solid #000;
  border-radius: 15px;
`;
