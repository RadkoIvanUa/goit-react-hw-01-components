import styled from 'styled-components';

const StyledStatus = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => (props.status === 'true' ? 'green' : 'red')};
`;

export { StyledStatus };
