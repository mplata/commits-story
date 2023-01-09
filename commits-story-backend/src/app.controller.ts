import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './services/github.service';

@Controller()
export class AppController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits/:name')
  getCommits(@Param('name') repoName: string): Promise<any> {
    return this.githubService.getLatestCommits(repoName);
  }

  @Get('repos')
  getRepos(): Promise<any> {
    return this.githubService.getRepos();
  }
}
