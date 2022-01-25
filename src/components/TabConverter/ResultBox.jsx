import React from 'react';
import styled from 'styled-components';
import { BORDER } from '../../constants';

export const ResultBox = () => {
  return (
    <ResultBoxContainer>
      <Tabs>
        <li className='active'>CAD</li>
        <li>KRW</li>
        <li>HKD</li>
        <li>JPY</li>
        <li>CNY</li>
      </Tabs>
      <TabResultBox>
        <p>CAD 2,000.00</p>
        <span>기준일 :</span>
        <span className='date'>2022-Jan-01</span>
      </TabResultBox>
    </ResultBoxContainer>
  );
};

const ResultBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Tabs = styled.ul`
  display: flex;
  width: 100%;
  height: 30px;
  margin-top: 15px;
  justify-content: space-between;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-weight: bold;
    border: ${BORDER.SHORTCUT};
    cursor: pointer;

    &.active {
      border-bottom: none;
    }
  }

  li + li {
    border-left: none;
  }
`;

const TabResultBox = styled.div`
  padding: 20px;
  border: ${BORDER.SHORTCUT};
  border-top: none;
  height: 75%;

  p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  span {
    margin-left: 10px;
    line-height: 1.3;
    display: block;

    &.date {
      font-weight: 700;
    }
  }
`;
