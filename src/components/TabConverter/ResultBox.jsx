import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BORDER, TAB_CURRENCY, COLOR } from 'constants';
import { DateConverter } from 'utils/dateConverter';

export const ResultBox = ({ isLoading, currency, apiData, inputValue }) => {
  const [tabs, setTabs] = useState(TAB_CURRENCY);
  const [currentTab, setCurrentTab] = useState('');
  const writtenMoney = Number(inputValue.split(',').join(''));
  const date = DateConverter(apiData.date);

  const calculator = (target, base) => {
    let targetRate = apiData.quotes[`USD${target}`];
    let baseRate = apiData.quotes[`USD${base}`];
    let exchangeRate = Number((targetRate / baseRate) * writtenMoney);
    return exchangeRate.toLocaleString('en', {
      maximumFractionDigits: 2,
    });
  };

  const handleClick = (e) => {
    setCurrentTab(e.target.innerHTML);
  };

  useEffect(() => {
    let changedTabs = TAB_CURRENCY.filter((tab) => tab !== currency);
    setTabs(changedTabs);
    setCurrentTab(changedTabs[0]);
  }, [currency, setCurrentTab]);

  return (
    <ResultBoxContainer>
      <Tabs>
        {tabs.map((tab, index) => (
          <li key={index} onClick={handleClick} className={tab === currentTab ? 'active' : null}>
            {tab}
          </li>
        ))}
      </Tabs>
      <TabResultBox>
        <CurrencyResult>
          <p>
            {currentTab}&nbsp;
            {apiData.quotes ? calculator(currentTab, currency) : '0'}
          </p>
          <span>기준일 :</span>
          <span className='date'>{apiData.quotes && date}</span>
        </CurrencyResult>
        {!apiData.quotes && (
          <LoadResult>
            {isLoading ? (
              <p></p>
            ) : (
              <p className='failed'>
                환율 정보를 불러올 수 없습니다. <br />
                다시 시도해주세요.
              </p>
            )}
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
  flex: 1;
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
