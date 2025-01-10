const apiLink = "https://api.github.com/users/Code-Timothy/repos";

export const fetchGithubProjects = async () => {
    const response = await fetch(apiLink);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const projects = await response.json();

    return projects;
};