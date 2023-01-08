import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor(private configService: ConfigService) {
    const auth = configService.get<string>('GITHUB_TOKEN');
    this.octokit = new Octokit({
      auth,
    });
  }

  async getLatestCommits(repo: string): Promise<any> {
    const owner = this.configService.get<string>('GITHUB_USER');
    const { data } = await this.octokit.repos.listCommits({
      owner,
      repo
    });
    return data;
  }

  async getRepos(): Promise<any> {
    const username = this.configService.get<string>('GITHUB_USER');
    const { data } = await this.octokit.repos.listForUser({
      username
    });
    return data;
  }
}