import { CommitInfo } from "../../types/types";

export const getCommits = async (repo: string = ''): Promise<CommitInfo[]> => {
    const baseUrl = import.meta.env.VITE_API_ENDPOINT;
    const url = `${baseUrl}commits/${repo}`; 
    const response = await fetch(url) as Response;
    if( !response.ok ) {
        console.log(response);
        throw new Error('Error loading commits');
    }
    const commits = await response.json();
    return commits;
};