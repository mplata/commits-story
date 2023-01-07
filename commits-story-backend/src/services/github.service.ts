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