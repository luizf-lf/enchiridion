import 'react-native';
import LocalStorageService from '../src/services/LocalStorageService';

describe('Local Storage helper functions', () => {
  const storage = new LocalStorageService();
  const quoteTestObject = {
    quote: {
      _id: 'test__id',
      author: 'test__author',
      authorSlug: 'test__author',
      content: 'test__content',
      dateAdded: new Date().toLocaleString(),
      dateModified: new Date().toLocaleString(),
      length: 42,
      tags: [],
    },
    timestamp: Date.now(),
  };

  it('Sets the local storage data', async () => {
    await expect(storage.setQuoteData(quoteTestObject)).resolves.toBeUndefined();
  });

  it('Recovers the local storage data and match the previously saved data', async () => {
    await expect(storage.getQuoteData()).resolves.toMatchObject(quoteTestObject);
  });
});
