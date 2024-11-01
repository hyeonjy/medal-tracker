import React from "react";
import styled from "styled-components";
import MedalItem from "./MedalItem";

const MedalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #e6e6fa;
  border-radius: 8px;
  overflow: hidden;
`;

const MedalTableHeader = styled.thead`
  display: table-header-group;
  vertical-align: middle;

  th {
    background-color: #003580;
    color: #fff;
    font-weight: 700;

    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
`;

export const MedalTableRow = styled.tr`
  display: table-row;
`;

const MedalTableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;

  td {
    vertical-align: middle;
    color: #333;

    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  tr:nth-child(2n) {
    background-color: #f4f4f9;
  }

  tr:hover {
    background-color: #dcdcdc;
  }
`;

const MedalList = ({ medalRecords, setMedalRecords, toggle }) => {
  return (
    <div>
      {medalRecords.length !== 0 ? (
        <MedalTable>
          <MedalTableHeader>
            <MedalTableRow>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>총 메달</th>
              <th>액션</th>
            </MedalTableRow>
          </MedalTableHeader>
          <MedalTableBody>
            {/* 만약 메달 수가 같으면, 금->은->동 메달 순으로 정렬되도록 */}
            {/* toggle이 true면 총 메달 순, false면 금메달 순으로 */}
            {medalRecords
              .sort((a, b) => {
                const criteria = toggle
                  ? ["total", "gold", "silver", "bronze"]
                  : ["gold", "silver", "bronze"];

                for (let key of criteria) {
                  if (b[key] !== a[key]) {
                    return b[key] - a[key];
                  }
                }
                return 0;
              })
              .map((li) => {
                return (
                  <MedalItem
                    key={li.id}
                    li={li}
                    medalRecords={medalRecords}
                    setMedalRecords={setMedalRecords}
                  />
                );
              })}
          </MedalTableBody>
        </MedalTable>
      ) : (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      )}
    </div>
  );
};

export default MedalList;
