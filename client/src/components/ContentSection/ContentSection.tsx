import Styled from './ContentSection.styled';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  testId?: string;
}

const ContentSection = ({ title, children, testId }: ContentSectionProps) => {
  return (
    <Styled.ContentSection data-cy={testId}>
      <Styled.Title data-cy="contentTitle">{title}</Styled.Title>
      <Styled.ContentContainer data-cy="contentContainer">
        {children}
      </Styled.ContentContainer>
    </Styled.ContentSection>
  );
};

export default ContentSection;
