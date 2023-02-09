import Styled from './ContentSection.styled';
 
interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <Styled.ContentSection>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.ContentSection>
  );
};

export default ContentSection;
