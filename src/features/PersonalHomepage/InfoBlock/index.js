import { Wrapper, Subtitle, Title, AboutMe, } from "./styled";

const InfoBlock = ({ subtitle, title, description, additionalContent }) => (
    <Wrapper>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <AboutMe>{description}</AboutMe>
        {additionalContent}
    </Wrapper>
);

export default InfoBlock;