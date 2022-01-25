import React from 'react';
import styled from 'styled-components';
import { BORDER } from '../../constants';

export const FormBox = ({ setCurrency, inputValue, setInputValue }) => {
  const options = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];
  const handleChange = (e) => {
    setCurrency(e.target.value);
    setInputValue('');
  };
  const handleType = (e) => {
    if (e.target.value >= 1000) {
      setInputValue(Number(1000).toLocaleString('en'));
      return;
    }
    setInputValue(e.target.value);
  };
  return (
    <FormBoxContainer>
      <input
        type='text'
        maxLength='4'
        placeholder='값을 입력하세요'
        value={inputValue}
        onChange={(e) => handleType(e)}
        onKeyUp={(e) => handleType(e)}
      />
      <select onChange={(e) => handleChange(e)} name='current'>
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
