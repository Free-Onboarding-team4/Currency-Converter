import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_ENDPOINT, SELECT_CURRENCY, COLOR, Country } from 'constants';
import { SelectBox } from './';

export const SelectConverter = () => {
  const [hide, setHide] = useState(false);
  const [number, setNumber] = useState(0);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(API_ENDPOINT(SELECT_CURRENCY.join(',')))
      .then((res) => res.json())
      .then((data) => {
        for (const key in data.quotes) {
          if (Country[current].label === key.substring(3, 6)) {
            setData(data.quotes[key].toFixed(2));
          }
        }
      });
  }, [current, data]);

  const onChange = (e) => {
    setNumber(e.target.value);
    setHide(false);
  };

  const exChange = () => {
    let result = number * data;
    return result.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };

  const showResult = () => {
    if (number <= 0 || number > 10000 || !number) {
      return alert('송금액이 올바르지 않습니다.');
    }
    setHide(true);
  };

  return (
    <Container>
      <Header>환율 계산</Header>
      <form>
        <ul>
          <li>송금국가: 미국(USD)</li>
          <ConContainer>
            수취국가: <SelectBox setCurrent={setCurrent} />
          </ConContainer>
          <li>
            환율:
            {!data ? (
              <span className='failed'>다시 시도해주세요.</span>
            ) : (
              <Count>
                {data}
                {Country[current].label}/USD
              </Count>
            )}
          </li>
          <li>
            송금액:
            <MoneyInput type='number' onChange={onChange} placeholder='숫자를 입력해주세요.' />
            USD
          </li>
        </ul>
        {hide ? (
          <Result>
            수취금액은 {exChange()} {Country[current].label} 입니다.
          </Result>
        ) : null}
        <Button type='button' onClick={showResult}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

const Result = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  border: solid 1px black;
  margin: 10px 3px;
  padding: 10px 50px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background-color: #3fc1c9;
  color: #fff;
`;

const Header = styled.h1`
  margin: 5px 0;
  font-weight: bold;
  font-size: 28px;
`;

const MoneyInput = styled.input`
  font-size: 14px;
  line-height: inherit;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.1em 0.5em;
  margin: 0 5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: #000;
  }
`;

const Count = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const Container = styled.section`
  width: 400px;
  height: 400px;
  padding: 30px;
  border-radius: 15px;
  font-size: 18px;
  line-height: 1.5;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.75);
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85%;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 200px;
    }

    .failed {
      margin-left: 10px;
      color: ${COLOR.BACKGROUND};
      font-weight: 700;
    }
  }
`;

const ConContainer = styled.li`
  display: flex;
`;
