import React from "react";
import { MedalTableRow } from "./MedalList";
import styled from "styled-components";

const DeleteBtn = styled.button`
  background-color: #dc3545;
  border: none;
  padding: 5px 10px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const MedalItem = ({ li, medalRecords, setMedalRecords }) => {
  const deleteCountry = (id) => {
    const updatedList = medalRecords.filter((li) => li.id !== id);
    setMedalRecords(updatedList);
  };

  return (
    <MedalTableRow>
      <td>{li.country}</td>
      <td>{li.gold}</td>
      <td>{li.silver}</td>
      <td>{li.bronze}</td>
      <td>
        <DeleteBtn onClick={() => deleteCountry(li.id)}>삭제</DeleteBtn>
      </td>
    </MedalTableRow>
  );
};

export default MedalItem;
