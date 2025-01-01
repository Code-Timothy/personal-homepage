import { StyledHeader, StyledSection, Title } from "./styled";

const Section = ({ title, body }) => (
    <StyledSection>
        <StyledHeader>
            <Title>{title}</Title>
        </StyledHeader>
        {body}
    </StyledSection>
);

export default Section;