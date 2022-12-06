import styled from 'styled-components';

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AuthWrapper = styled.div``;

const InputFormWrapper = styled.div``;
const InputBoxContainer = styled.div``;
const SelectButtonContainer = styled.button`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgb(70,124,237)' : 'rgb(172,195,238)'};
  padding: 5px;
  color: white;
`;
const SubmitButtonContainer = styled.button`
  /* background-color: ${({ isSelected }) =>
    isSelected ? 'rgb(70,124,237)' : 'rgb(172,195,238)'};
  padding: 5px;
  color: white; */
`;

export {
  AuthContainer,
  AuthWrapper,
  InputBoxContainer,
  InputFormWrapper,
  SelectButtonContainer,
  SubmitButtonContainer,
};
