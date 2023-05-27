import styled from 'styled-components';

const StyledList = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 200px;
    margin-bottom: 15px;
    border-radius: 10px;
    transition: scale 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      scale: 1.1;
      cursor: pointer;
    }
    img {
      width: 50px;
    }
    p {
      width: 60px;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export { StyledList };
