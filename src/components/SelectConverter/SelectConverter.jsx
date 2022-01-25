import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../constants";
import { ConDate } from "../../constants";
import { API_ENDPOINT } from "../../constants";

export const SelectConverter = () => {
  const [current, setCurrent] = useState(0);
  const onClickUp = () => {
    if (current === 0) return;
    setCurrent(current - 1);
  };

  const onClickDown = () => {
    if (current === ConDate.length - 1) return;
    setCurrent(current + 1);
  };

  return (
    <Container>
      <h2>환율 계산</h2>
      <form>
        <ul>
          <li>송금국가: 미국(USD)</li>
          <ConContainer>
            수취국가: {ConDate[current].label}
            <UpDownContainer>
              <UpDown onClick={onClickUp}>위</UpDown>
              <UpDown onClick={onClickDown}>아</UpDown>
            </UpDownContainer>
          </ConContainer>
          <li>
            환율: {}
            {}/USD
          </li>
          <li>
            송금액:
            <MoneyInput type="number" placeholder="숫자를 입력해주세요." />
            USD
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

const Container = styled.section`
  font-size: 18px;
  line-height: 1.5;
  color: #000;
`;
const MoneyInput = styled.input`
  font-size: 14px;
  line-height: 1.2;
  border: 1px solid #000;
  margin-left: 5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: #000;
  }
`;
const ConContainer = styled.li`
  display: flex;
  justify-content: space-between;
`;
const UpDownContainer = styled.div``;
const UpDown = styled.div`
  cursor: pointer;
  width: 30px;
  font-size: 10px;
`;
// 866734413fd906b3ca4b9709a36b47d9
