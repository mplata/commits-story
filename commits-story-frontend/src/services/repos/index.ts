import { Repo } from "../../types/types";

export const getRepos = async (): Promise<Repo[]> => {
    const baseUrl = import.meta.env.VITE_API_ENDPOINT;
    const url = `${baseUrl}repos/`;
    const response = await fetch(url) as Response;
    if( !response.ok ) {
        console.log(response);
        throw new Error('Error loading repositories');
    }
    const repos = await response.json();
    return repos;
};