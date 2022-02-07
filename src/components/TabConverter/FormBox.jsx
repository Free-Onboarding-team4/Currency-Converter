import React from 'react';
import styled from 'styled-components';
import { BORDER, TAB_CURRENCY } from 'constants';

export const FormBox = ({ setCurrency, inputValue, setInputValue }) => {
  const handleChange = (e) => {
    setCurrency(e.target.value);
    setInputValue('');
  };
  const handleType = (e) => {
    const pureString = e.target.value.split(',').join('');
    if (isNaN(Number(pureString))) return;
    if (pureString.length > 10) return;
    if (Number(pureString) >= 1000) {
      setInputValue(Number(pureString).toLocaleString());
    } else {
      setInputValue(pureString);
    }
  };

  return (
    <FormBoxContainer onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='값을 입력하세요' value={inputValue} onChange={handleType} onKeyUp={handleType} />
      <select onChange={handleChange} name='current'>
        {TAB_CURRENCY.map((opt, index) => (
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
  margin-bottom: 15px;

  input {
    width: 30%;
    flex: 1;
    height: 30px;
    padding: 5px;
    border: ${BORDER.SHORTCUT};
  }

  select {
    margin-left: 15px;
    width: 100px;
    height: 30px;
    border: ${BORDER.SHORTCUT};
    cursor: pointer;
  }
`;
