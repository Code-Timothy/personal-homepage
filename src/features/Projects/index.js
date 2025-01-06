import Tiles from "./Tiles";
import { Wrapper, StyledHeader, StyledGithubIcon, Title, Subtitle } from "./styled";

const Projects = () => (
    <Wrapper>
        <StyledHeader>
            <StyledGithubIcon />
            <Title>Portfolio</Title>
            <Subtitle>My recent projects</Subtitle>
        </StyledHeader>
        <Tiles />
    </Wrapper>
);

export default Projects;