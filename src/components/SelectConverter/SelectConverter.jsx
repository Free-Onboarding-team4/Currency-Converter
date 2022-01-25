import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants";

export const SelectConverter = () => {
  return (
    <Container>
      <h2>환율 계산</h2>
      <form>
        <ul>
          <li>송금국가: 미국(USD)</li>
          <li>
            수취국가:
            <ul>
              <li>한국(KRW)</li>
              <li>일본(JPY)</li>
              <li>필리핀(PHP)</li>
            </ul>
          </li>
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
