import axios, { AxiosResponse } from 'axios';

export interface QuotableRandomResponse {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export default class QuotableService {
  baseUrl: string;

  lastRandom: QuotableRandomResponse | null;

  constructor() {
    this.baseUrl = 'https://api.quotable.io';
    this.lastRandom = null;
  }

  async getRandom(): Promise<QuotableRandomResponse | null> {
    try {
      const route = '/random';
      console.log(`Fetching a quote from ${this.baseUrl}${route}`);
      const response = await axios.get(route, {
        baseURL: this.baseUrl,
      });

      this.lastRandom = response.data;
    } catch (error) {
      console.error(`QuotableService error :${error}`);
    } finally {
      return this.lastRandom;
    }
  }
}
