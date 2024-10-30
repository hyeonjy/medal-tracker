import React from "react";
import styled from "styled-components";

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 700;
  cursor: pointer;
`;

const Input = styled.input`
  width: 145px;
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
            pattern={idx !== 0 ? "^\\d{1,2}$" : undefined}
            title={"에러"}
            required
            maxLength={idx !== 0 ? 2 : undefined}
            // min={idx !== 0 ? 0 : undefined}
            // max={idx !== 0 ? 99 : undefined}
          />
        </InputField>
      ))}
    </>
  );
};

export default InputGroup;
