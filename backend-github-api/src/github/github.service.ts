import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class GithubService {
  /**
   * Fetches the commit history for a specific GitHub repository.
   * @param owner - The owner of the GitHub repository.
   * @param repo - The name of the GitHub repository.
   * @returns A promise that resolves to the commit history.
   */

  async getCommits(owner: string, repo: string): Promise<any> {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching GitHub data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
