import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "./InputGroup";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 8px;
  align-items: flex-end;
`;

const ButtonWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  align-items: end;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fc0;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  align-self: center;
`;

const MedalForm = ({ medalRecords, setMedalRecords }) => {
  const [countryData, setCountryData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    const newValue = value.replace(/^0+/, ""); //앞에 붙여진 0은 없앤다.
    setCountryData((prev) => ({ ...prev, [name]: newValue }));
  };

  const addCountry = (event) => {
    event.preventDefault();
    // 국가명을 입력하지 않았을 경우
    if (countryData.country.trim() === "") {
      alert("국가명을 입력해주세요!");
      return;
    }

    // 나라가 이미 있는지 확인
    const targetCountry = medalRecords.find(
      (li) => li.country === countryData.country
    );

    // 이미 존재하면, 경고창
    if (targetCountry) {
      alert("이미 존재하는 나라입니다.");
    }
    // 존재하지 않으면, 메달 목록 추가
    else {
      // 총 메달 수
      const total =
        parseInt(countryData.gold) +
        parseInt(countryData.silver) +
        parseInt(countryData.bronze);

      const newCountry = { ...countryData, id: Date.now(), total };
      setMedalRecords((prev) => [...prev, newCountry]);
    }

    setCountryData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  const updateCountry = (event) => {
    event.preventDefault();
    // 국가명을 입력하지 않았을 경우
    if (countryData.country.trim() === "") {
      alert("국가명을 입력해주세요!");
      return;
    }

    // 해당하는 나라 찾기
    const targetCountry = medalRecords.find(
      (li) => li.country === countryData.country
    );

    // 존재하면, 메달 목록 업데이트
    if (targetCountry) {
      // 총 메달 수
      const total =
        parseInt(countryData.gold) +
        parseInt(countryData.silver) +
        parseInt(countryData.bronze);

      const updatedList = medalRecords.map((li) =>
        li.id === targetCountry.id ? { ...countryData, id: li.id, total } : li
      );
      setMedalRecords(updatedList);
    }
    // 존재하지 않으면, alert창
    else {
      alert("해당하는 나라는 없어!");
    }

    setCountryData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <Form onSubmit={addCountry}>
      <InputGroup onChange={onChange} countryData={countryData} />
      <ButtonWrap>
        <Button type="submit">국가 추가</Button>
        <Button type="button" onClick={updateCountry}>
          업데이트
        </Button>
      </ButtonWrap>
    </Form>
  );
};

export default MedalForm;
