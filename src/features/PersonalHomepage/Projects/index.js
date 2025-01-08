import { useSelector } from "react-redux";
import Tiles from "./Tiles";
import Loading from "./Loading";
import Error from "./Error";
import { Wrapper, StyledHeader, StyledGithubIcon, Title, Subtitle } from "./styled";
import { selectError, selectLoading, selectProjects } from "./projectsSlice";

const Projects = () => {
    const loading = useSelector(selectLoading);
    const projects = useSelector(selectProjects);
    const error = useSelector(selectError);

    return (
        <Wrapper>
            <StyledHeader>
                <StyledGithubIcon />
                <Title>Portfolio</Title>
                <Subtitle>My recent projects</Subtitle>
            </StyledHeader>
            {loading && <Loading />}
            {projects && <Tiles />}
            {error && <Error />}
        </Wrapper>
    );
};

export default Projects;