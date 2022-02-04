import React from 'react';
import styled from 'styled-components';
import { ConDate } from 'constants';

export const SelectBox = ({ setCurrent }) => {
  const handleChange = (e) => {
    setCurrent(e.target.value);
  };

  return (
    <SelectBoxContainer>
      <Select onChange={handleChange} name='country'>
        {ConDate.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </Select>
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  margin-left: 5px;
  padding: 0 7px;
  border: solid 1px black;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 120px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Eo_circle_blue_arrow-up-down.svg/1024px-Eo_circle_blue_arrow-up-down.svg.png')
    no-repeat 101% 10%;
  background-size: contain;
`;
