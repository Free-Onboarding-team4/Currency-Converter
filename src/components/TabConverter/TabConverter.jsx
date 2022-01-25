import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormBox } from './FormBox';
import { ResultBox } from './ResultBox';
import { API_ENDPOINT } from '../../constants';

export const TabConverter = () => {
  const [apiData, setApiData] = useState({});
  const [currentTab, setCurrentTab] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setApiData({ quotes: data.quotes, date: data.timestamp });
      });
  }, [currency]);
  console.log(apiData);
  return (
    <TabConverterContainer>
      <FormBox
        setCurrency={setCurrency}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ResultBox
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currency={currency}
        apiData={apiData}
        inputValue={inputValue}
      />
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
