export const fetchGithubProjects = async () => {
    const response = await fetch("https://api.github.com/users/Code-Timothy/repos");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const projects = await response.json();

    return projects;
};