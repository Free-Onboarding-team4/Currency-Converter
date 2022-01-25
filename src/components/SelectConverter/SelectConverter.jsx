import React, { useEffect, useState } from "react";
import { ConDate } from "../../constants";
import { Country } from "../../constants";
import { API_ENDPOINT } from "../../constants";
import styled from "styled-components";

export const SelectConverter = () => {
  const [current, setCurrent] = useState(0);
  const [krw, setKrw] = useState(0);
  const [jpy, setJpy] = useState(0);
  const [php, setPhp] = useState(0);

  const onClickUp = () => {
    if (current === 0) return;
    setCurrent(current - 1);
  };

  const onClickDown = () => {
    if (current === ConDate.length - 1) return;
    setCurrent(current + 1);
  };

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setKrw(data.quotes.USDKRW);
        setJpy(data.quotes.USDJPY);
        setPhp(data.quotes.USDPHP);
      });
  }, [krw, jpy, php]);

  return (
    <Container>
      <Header>환율 계산</Header>
      <form>
        <ul>
          <li>송금국가: 미국(USD)</li>
          <ConContainer>
            수취국가:
            <UpDownContainer>
              {ConDate[current].label}
              <ArrowContainer>
                <UpDown onClick={onClickUp}>위</UpDown>
                <UpDown onClick={onClickDown}>아</UpDown>
              </ArrowContainer>
            </UpDownContainer>
          </ConContainer>
          <li>
            환율:
            {Country[current].label === "KRW" && krw}
            {Country[current].label === "JPY" && jpy}
            {Country[current].label === "PHP" && php}
            {Country[current].label}/USD
          </li>
          <li>
            송금액:
            <MoneyInput type="number" placeholder="숫자를 입력해주세요." />
            USD
          </li>
        </ul>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

const Button = styled.button`
  border: solid 1px gray;
  margin: 8px 3px;
  padding: 7px 50px;
  background: linear-gradient(gray, white);
  font-size: 15px;
  font-weight: bold;
`;

const Header = styled.h1`
  margin: 5px 0;
  font-weight: bold;
`;

const MoneyInput = styled.input`
  font-size: 14px;
  line-height: inherit;
  border: 1px solid #000;
  margin: 0 5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: #000;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const Container = styled.section`
  font-size: 18px;
  line-height: 1.5;
  color: #000;
`;

const ConContainer = styled.li`
  display: flex;
`;

const UpDownContainer = styled.div`
  display: flex;
  padding-left: 5px;
`;

const UpDown = styled.div`
  cursor: pointer;
  width: 30px;
  font-size: 10px;
`;
