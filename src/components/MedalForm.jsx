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

const ValidMessage = styled.p`
  margin: 0;
  color: tomato;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`;

const MedalForm = ({ medalRecords, setMedalRecords }) => {
  const [isValid, setIsValid] = useState({
    gold: true,
    silver: true,
    bronze: true,
  }); //유효성 검증

  const [countryData, setCountryData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  }); //input의 데이터

  const onChange = (event) => {
    const { name, value } = event.target;
    setCountryData((prev) => ({
      ...prev,
      [name]: name === "country" ? value : parseInt(value),
    }));

    // 0부터 99까지인지 유효성 검사
    if (name !== "country") {
      const isMedalValid = parseInt(value) >= 0 && parseInt(value) <= 99;
      setIsValid((prev) => ({ ...prev, [name]: isMedalValid }));
    }
  };

  const addCountry = (event) => {
    event.preventDefault();

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
      const total = countryData.gold + countryData.silver + countryData.bronze;

      const newCountry = { ...countryData, id: Date.now(), total };
      setMedalRecords((prev) => [...prev, newCountry]);
    }

    //  input 창 초기화
    setCountryData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  const updateCountry = (event) => {
    event.preventDefault();
    // 국가명을 입력하지 않았을 경우
    if (countryData.country.trim() === "") {
      alert("국가명을 입력해주세요!");
      return;
    }

    // 0부터 99까지 유효 범위가 아닌 경우
    if (!isValid.gold || !isValid.silver || !isValid.bronze) {
      alert("금, 은, 동메달은 0부터 99까지만 가능합니다.");
      return;
    }

    // 해당하는 나라 찾기
    const targetCountry = medalRecords.find(
      (li) => li.country === countryData.country
    );

    // 존재하면, 메달 목록 업데이트
    if (targetCountry) {
      // 총 메달 수
      const total = countryData.gold + countryData.silver + countryData.bronze;

      const updatedList = medalRecords.map((li) =>
        li.id === targetCountry.id ? { ...countryData, id: li.id, total } : li
      );
      setMedalRecords(updatedList);
    }
    // 존재하지 않으면, alert창
    else {
      alert("해당하는 나라는 없습니다!");
    }

    //  input 창 초기화
    setCountryData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <>
      <Form onSubmit={addCountry}>
        <InputGroup
          onChange={onChange}
          countryData={countryData}
          isValid={isValid}
        />
        <ButtonWrap>
          <Button type="submit">국가 추가</Button>
          <Button type="button" onClick={updateCountry}>
            업데이트
          </Button>
        </ButtonWrap>
      </Form>

      {/* 유효메시지 */}
      {!(isValid.gold && isValid.silver && isValid.bronze) && (
        <ValidMessage>0부터 99까지만 가능합니다!</ValidMessage>
      )}
    </>
  );
};

export default MedalForm;
