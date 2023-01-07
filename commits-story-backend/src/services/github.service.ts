import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: 'YOUR_PERSONAL_ACCESS_TOKEN',
    });
  }

  async getLatestCommits(repository: string): Promise<any> {
    const { data } = await this.octokit.repos.listCommits({
      owner: 'OWNER',
      repo: repository,
    });
    return data;
  }
}