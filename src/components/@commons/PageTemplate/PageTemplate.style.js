import styled from 'styled-components';

const PageTemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
`;

const PageHeaderWrapper = styled.header`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const PageHeaderTitle = styled.div``;

export { PageTemplateWrapper, PageHeaderWrapper, PageHeaderTitle };
