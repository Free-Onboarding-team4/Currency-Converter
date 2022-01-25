import React from 'react';
import styled from 'styled-components';
import { BORDER } from '../../constants';

export const FormBox = () => {
  return (
    <FormBoxContainer>
      <input type='text' placeholder='값을 입력하세요' />
      <select name='current'>
        <option value='USD'>USD</option>
        <option value='CAD'>CAD</option>
        <option value='HKD'>HKD</option>
        <option value='JPY'>JPY</option>
        <option value='CNY'>CNY</option>
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
