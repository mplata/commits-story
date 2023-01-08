import { Controller, Get } from '@nestjs/common';
import { GithubService } from './services/github.service';

@Controller()
export class AppController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  getCommits(): Promise<any> {
    return this.githubService.getLatestCommits('commits-story');
  }

  @Get('repos')
  getRepos(): Promise<any> {
    return this.githubService.getRepos();
  }
}
