import styled from 'styled-components';

const StyledProfile = styled.div`
  border-radius: 20px;
  background-color: rgb(107, 112, 239);
  overflow: hidden;
  width: 250px;
  text-align: center;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: scale 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

const StyledDescription = styled.div`
  padding: 30px;
  img {
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    background-color: white;
  }
`;

const StyledName = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
  color: white;
`;

const StyledInfo = styled.div`
  color: black;
  margin-bottom: 10px;
`;

const StyledStats = styled.ul`
  display: flex;
  align-items: center;
  background-color: rgb(223, 227, 230);
  li {
    padding: 10px;
  }
  li:not(:last-child) {
    border-right: 1px solid black;
  }
  li > span {
    display: block;
  }

  li > span:last-child {
    font-weight: 700;
  }
`;

export {
  StyledProfile,
  StyledDescription,
  StyledName,
  StyledInfo,
  StyledStats,
};
