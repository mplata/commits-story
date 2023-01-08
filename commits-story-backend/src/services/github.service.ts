import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: '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',
    });
  }

  async getLatestCommits(repo: string): Promise<any> {
    const { data } = await this.octokit.repos.listCommits({
      owner: 'mplata',
      repo
    });
    return data;
  }
}