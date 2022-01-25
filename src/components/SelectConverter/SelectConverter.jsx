import React, { useEffect, useState } from "react";
import { ConDate } from "../../constants";
import { Country } from "../../constants";
import { API_ENDPOINT, SELECT_CURRENCY } from "../../constants";
import styled from "styled-components";

export const SelectConverter = () => {
  const [hide, setHide] = useState(false);
  const [number, setNumber] = useState(0);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(0);

  const handleChange = (e) => {
    setCurrent(e.target.value);
  };

  useEffect(() => {
    fetch(API_ENDPOINT(SELECT_CURRENCY.join(",")))
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
      return alert("송금액이 올바르지 않습니다.");
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
            수취국가:
            <UpDownContainer>
              <Select onChange={handleChange} name="country">
                {ConDate.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </UpDownContainer>
          </ConContainer>
          <li>
            환율:
            <Count>
              {data}
              {Country[current].label}/USD
            </Count>
          </li>
          <li>
            송금액:
            <MoneyInput
              type="number"
              onChange={onChange}
              placeholder="숫자를 입력해주세요."
            />
            USD
          </li>
        </ul>
        <Button type="button" onClick={showResult}>
          Submit
        </Button>
        {hide ? (
          <Result>
            수취금액은 {exChange()} {Country[current].label} 입니다.
          </Result>
        ) : null}
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
  padding: 7px 50px;
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

const Select = styled.select`
  width: 120px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Eo_circle_blue_arrow-up-down.svg/1024px-Eo_circle_blue_arrow-up-down.svg.png")
    no-repeat 101% 10%;
  background-size: contain;
`;

const Count = styled.div`
  display: inline-block;
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
  margin-left: 5px;
  padding: 0 7px;
  border: solid 1px black;
  border-radius: 5px;
`;
