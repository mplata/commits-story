import { CommitInfo } from "../../types/types";

export const getCommits = async (repo: string): Promise<CommitInfo[]> => {
    const url = 'http://localhost:3000/commits';
    const response = await fetch(url) as Response;
    if( !response.ok ) {
        console.log(response);
        throw new Error('Error loading commits');
    }
    const commits = await response.json();
    return commits;
};