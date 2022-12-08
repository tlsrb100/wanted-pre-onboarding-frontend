import * as S from './PageTemplate.style';
const PageTemplate = ({ children, title }) => {
  return (
    <S.PageTemplateWrapper>
      <S.PageHeaderWrapper>{title}</S.PageHeaderWrapper>
      {children}
    </S.PageTemplateWrapper>
  );
};

export default PageTemplate;
