import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px #0000001a;
  border-radius: 8px;
  color: #333;
  position: relative;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    color: tomato;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #003580;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ToggleBox = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
`;

const ToggleIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => (props.$toggle ? "green" : "#333333")};
`;

const Medal = () => {
  const [toggle, setToggle] = useState(false); //금메달 순, 총 메달 순을 위한 토글
  const [medalRecords, setMedalRecords] = useState([]); //전체 메달 기록 목록

  // 처음 렌더링 될 때, 로컬스토리지에서 전체 매달 기록을 가져옴
  useEffect(() => {
    const savedMedalRecords = localStorage.getItem("Medal");
    setMedalRecords(savedMedalRecords ? JSON.parse(savedMedalRecords) : []);
  }, []);

  // 메달 기록이 변경될때 마다 로컬스토리지에 해당 값 저장
  useEffect(() => {
    localStorage.setItem("Medal", JSON.stringify(medalRecords));
  }, [medalRecords]);

  return (
    <Container>
      {/* 메달 기록이 있어야 토글이 보이도록 */}
      {!!medalRecords.length ? (
        <ToggleBox>
          <h1>{toggle ? "총메달 순" : "금메달 순"}</h1>
          <ToggleIcon
            $toggle={toggle}
            icon={toggle ? faToggleOn : faToggleOff}
            onClick={() => setToggle((prev) => !prev)}
          />
        </ToggleBox>
      ) : null}

      <Title>2024 파리 올림픽</Title>
      <MedalForm
        medalRecords={medalRecords}
        setMedalRecords={setMedalRecords}
      />
      <MedalList
        medalRecords={medalRecords}
        setMedalRecords={setMedalRecords}
        toggle={toggle}
      />
    </Container>
  );
};

export default Medal;
