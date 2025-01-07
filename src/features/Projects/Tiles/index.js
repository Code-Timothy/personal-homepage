import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectsRequest, selectProjects } from "../projectsSlice";
import {
    Wrapper,
    StyledTile,
    Title,
    Description,
    LinksContainer,
    Link,
} from "./styled";

const Tiles = () => {
    const projects = useSelector(selectProjects);
    console.log(projects)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjectsRequest());
    }, []);

    return (
        <Wrapper>
            {projects.map(project => (
                <StyledTile>
                    <Title>{project.name}</Title>
                    <Description>{project.description}</Description>
                    <LinksContainer>
                        <span>Demo:</span>
                        <span><Link href={project.homepage} target="_blank" rel="noreferrer noopener">{project.homepage}</Link></span>
                        <span>Code:</span>
                        <span><Link href={project.svn_url} target="_blank" rel="noreferrer noopener">{project.svn_url}</Link></span>
                    </LinksContainer>
                </StyledTile>
            ))}
        </Wrapper>
    );
};

export default Tiles;
