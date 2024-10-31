import React from "react";
import styled from "styled-components";

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 700;
  cursor: pointer;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const InputGroup = ({ onChange, countryData }) => {
  const inputFields = [
    {
      id: "country",
      label: "국가명",
      type: "text",
      placeholder: "국가 입력",
      value: countryData.country,
    },
    {
      id: "gold",
      label: "금메달",
      type: "number",
      placeholder: "0",
      value: countryData.gold,
    },
    {
      id: "silver",
      label: "은메달",
      type: "number",
      placeholder: "0",
      value: countryData.silver,
    },
    {
      id: "bronze",
      label: "동메달",
      type: "number",
      placeholder: "0",
      value: countryData.bronze,
    },
  ];

  return (
    <>
      {inputFields.map((field, idx) => (
        <InputField key={field.id}>
          <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
          <Input
            type={field.type}
            placeholder={field.placeholder}
            id={field.id}
            name={field.id}
            onChange={onChange}
            value={field.value}
            required
            min={idx !== 0 ? 0 : undefined} //국가명이 아닌 input에만, min,max 적용
            max={idx !== 0 ? 99 : undefined}
          />
        </InputField>
      ))}
    </>
  );
};

export default InputGroup;
