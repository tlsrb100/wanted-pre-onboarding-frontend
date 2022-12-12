import styled from 'styled-components';

const AuthContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.COLOR.TODO_FORM_BACKGROUND};
`;

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
  font-weight: 700;
  display: flex;
  flex-direction: column;

  & label {
    padding: 5px 0;
  }
  & input {
    height: 30px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLOR.INPUT_BOX_BACKGROUND};
  }
`;
const SelectButtonContainer = styled.button`
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgb(70,124,237)' : 'rgb(172,195,238)'};
  padding: 5px;
  width: 80px;
  height: 40px;
  border-radius: 5px;
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
  InputBoxContainer,
  InputFormWrapper,
  SelectButtonContainer,
  SubmitButtonContainer,
  SelectButtonListContainer,
};
