import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BORDER, TAB_CURRENCY, COLOR } from '../../constants';
import { DateConverter } from '../../utils/dateConverter';

export const ResultBox = ({ isLoading, currentTab, setCurrentTab, currency, apiData, inputValue }) => {
  const [tabs, setTabs] = useState(TAB_CURRENCY);
  const writtenMoney = Number(inputValue.split(',').join(''));
  const date = DateConverter(apiData.date);
  const handleClick = (e) => {
    setCurrentTab(e.target.innerHTML);
  };
  const calculator = (target, base) => {
    let targetRate = apiData.quotes[`USD${target}`];
    let baseRate = apiData.quotes[`USD${base}`];
    let exchangeRate = Number((targetRate / baseRate) * writtenMoney);
    return exchangeRate.toLocaleString('en', {
      maximumFractionDigits: 2,
    });
  };
  useEffect(() => {
    const handleTab = () => {
      let changedTabs = TAB_CURRENCY.filter((tab) => tab !== currency);
      setTabs(changedTabs);
      setCurrentTab(changedTabs[0]);
    };
    handleTab();
  }, [currency, setCurrentTab]);
  return (
    <ResultBoxContainer>
      <Tabs>
        {tabs.map((tab, index) => (
          <li key={index} onClick={(e) => handleClick(e)} className={tab === currentTab ? 'active' : null}>
            {tab}
          </li>
        ))}
      </Tabs>
      <TabResultBox>
        <CurrencyResult>
          <p>
            {currentTab}&nbsp;
            {!apiData.quotes ? '0' : calculator(currentTab, currency)}
          </p>
          <span>기준일 :</span>
          <span className='date'>{isLoading || !apiData.quotes ? '' : date}</span>
        </CurrencyResult>
        {(isLoading || !apiData.quotes) && (
          <LoadResult>
            {(isLoading && <p></p>) ||
              (!apiData.quotes && (
                <p className='failed'>
                  환율 정보를 불러올 수 없습니다. <br />
                  다시 시도해주세요.
                </p>
              ))}
          </LoadResult>
        )}
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: ${BORDER.SHORTCUT};
  border-top: none;
  height: 75%;
`;

const CurrencyResult = styled.div`
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

const LoadResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  line-height: 1.4;

  p.failed {
    font-size: 16px;
    color: ${COLOR.BACKGROUND};
    font-weight: 700;
  }
`;
