import styled from 'styled-components';

const AuthContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AuthWrapper = styled.div``;

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectButtonListContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    padding: 5px 0;
  }
  & input {
    height: 30px;
  }
`;
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
  SelectButtonListContainer,
};
