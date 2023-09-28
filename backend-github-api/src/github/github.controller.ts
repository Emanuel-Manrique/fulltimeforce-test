import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { GithubService } from './github.service';

@ApiTags('Github')
@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  @ApiOperation({
    summary: 'Retrieve commit history for a specific GitHub repository.',
  })
  @ApiQuery({
    name: 'owner',
    description: 'The owner of the GitHub repository.',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'repo',
    description: 'The name of the GitHub repository.',
    required: false,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved commit history.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Repository not found.' })
  async getCommits(
    @Query('owner') owner: string = 'Emanuel-Manrique',
    @Query('repo') repo: string = 'StreetBattler2D',
  ): Promise<any> {
    return this.githubService.getCommits(owner, repo);
  }
}
