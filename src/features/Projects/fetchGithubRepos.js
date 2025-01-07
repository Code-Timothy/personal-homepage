export const fetchGithubRepos = async () => {
    const response = await fetch("https://api.github.com/users/Code-Timothy/repos");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const repos = await response.json();

    return repos;
};