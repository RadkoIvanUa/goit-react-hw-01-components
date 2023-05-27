import styled from 'styled-components';

const StyledTable = styled.table`
  font-size: 20px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  width: 700px;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  tr {
    transition: scale 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  th {
    background-color: rgb(107, 112, 239);
    color: white;
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
    text-transform: uppercase;
  }

  tbody {
    td {
      padding: 12px;
    }
    tr:nth-child(even) {
      background-color: rgb(223, 227, 230);
    }
    td::first-letter {
      text-transform: uppercase;
    }
  }

  tbody > tr:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

export { StyledTable };
