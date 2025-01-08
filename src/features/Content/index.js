import { Wrapper, Subtitle, Title, AboutMe, } from "./styled";

const Content = ({ button, subtitle, title, description, additionalContent }) => (
    <Wrapper>
        {button}
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <AboutMe>{description}</AboutMe>
        {additionalContent}
    </Wrapper>
);

export default Content;