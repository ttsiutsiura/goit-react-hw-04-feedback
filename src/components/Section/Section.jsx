import { SectionEl, SectionTitle } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionEl>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionEl>
  );
}
