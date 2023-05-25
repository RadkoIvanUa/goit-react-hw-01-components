import styled from 'styled-components';

const StyledSection = styled.section`
  border-radius: 20px;
  background-color: rgb(107, 112, 239);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  overflow: hidden;
  width: 300px;
  text-align: center;
  font-size: 20px;
  transition: scale 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
  h2 {
    font-size: 30px;
    padding: 10px;
    color: white;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding: 10px;
    width: 100%;
  }

  li > span {
    display: block;
  }

  li > span:last-child {
    font-weight: 700;
  }
`;

export { StyledSection, StyledList };
