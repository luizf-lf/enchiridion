import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuotableRandomResponse } from './QuotableService';

export interface QuoteDataInterface {
  quote: QuotableRandomResponse;
  timestamp: number;
}

export default class LocalStorageService {
  quoteDataKey: string;
  quoteData: QuoteDataInterface | null;

  constructor() {
    this.quoteDataKey = 'QUOTE_DATA';
    this.quoteData = null;
  }

  async getQuoteData() {
    try {
      const quoteData = await AsyncStorage.getItem(this.quoteDataKey);

      if (quoteData) {
        this.quoteData = JSON.parse(quoteData);
      }
    } catch (error) {
      console.error(`LocalStorageHelper: Could not recover quoteData: ${error}`);
    } finally {
      return this.quoteData;
    }
  }

  async setQuoteData(data: QuoteDataInterface): Promise<void> {
    try {
      await AsyncStorage.setItem(this.quoteDataKey, JSON.stringify(data));
    } catch (error) {
      console.error(`LocalStorageHelper: Could not save quoteData: ${error}`);
    }
  }
}
