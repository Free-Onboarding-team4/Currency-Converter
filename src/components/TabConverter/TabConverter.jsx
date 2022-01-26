import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormBox } from './FormBox';
import { ResultBox } from './ResultBox';
import { API_ENDPOINT, TAB_CURRENCY } from '../../constants';

export const TabConverter = () => {
  const [apiData, setApiData] = useState({ quotes: '', date: '' });
  const [currentTab, setCurrentTab] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState('true');

  useEffect(() => {
    fetch(API_ENDPOINT(TAB_CURRENCY.join(',')))
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.quotes) setApiData({ quotes: data.quotes, date: data.timestamp });
      });
  }, [currency]);

  return (
    <TabConverterContainer>
      <FormBox setCurrency={setCurrency} inputValue={inputValue} setInputValue={setInputValue} />
      <ResultBox
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currency={currency}
        apiData={apiData}
        inputValue={inputValue}
        isLoading={isLoading}
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
  background-color: #fff;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.75);
`;
