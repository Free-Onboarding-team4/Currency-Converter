import React, { useState } from 'react';
import styled from 'styled-components';
import { BORDER } from '../../constants';

export const FormBox = ({ setCurrency }) => {
  const [options, setOptions] = useState([
    'USD',
    'CAD',
    'KRW',
    'HKD',
    'JPY',
    'CNY',
  ]);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  const handleType = (e) => {
    if (e.target.value > 1000) {
      setInputValue(1000);
      return;
    }
    setInputValue(e.target.value);
  };
  return (
    <FormBoxContainer>
      <input
        type="text"
        placeholder="값을 입력하세요"
        value={inputValue}
        onChange={(e) => handleType(e)}
        onKeyUp={(e) => handleType(e)}
      />
      <select onChange={(e) => handleChange(e)} name="current">
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FormBoxContainer>
  );
};

const FormBoxContainer = styled.form`
  display: flex;

  input {
    width: 30%;
    flex: 1;
    height: 30px;
    padding: 5px;
    border: ${BORDER.SHORTCUT};
  }

  input::placeholder {
  }

  select {
    margin-left: 15px;
    width: 100px;
    height: 30px;
    border: ${BORDER.SHORTCUT};
    cursor: pointer;
  }
`;
