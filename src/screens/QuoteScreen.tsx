import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Surface, Text } from '@react-native-material/core';
import { globalStyles } from '../constants/globalStyles';
import { cardColor, textColor } from '../constants/colors';
import QuotableService from '../services/QuotableService';
import LocalStorageService from '../services/LocalStorageService';

function QuoteScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    async function initData() {
      const StorageHelper = new LocalStorageService();
      const quoteData = await StorageHelper.getQuoteData();

      if (
        quoteData &&
        new Date(quoteData.timestamp).toLocaleDateString() ===
          new Date().toLocaleDateString()
      ) {
        console.log('Quote of the day has already been fetched.');
        setIsLoading(false);
        setQuote(quoteData.quote.content);
        setAuthor(quoteData.quote.author);
      } else {
        console.log('Quote of the day has must be updated.');
        const randomQuoteData = await new QuotableService().getRandom();

        if (randomQuoteData) {
          setIsLoading(false);
          setQuote(randomQuoteData.content);
          setAuthor(randomQuoteData.author);

          console.log('Updating local quote using the storage helper.');
          await StorageHelper.setQuoteData({
            quote: randomQuoteData,
            timestamp: Date.now(),
          });
        }
      }
    }

    initData();
  }, []);

  return (
    <View style={globalStyles.viewContainer}>
      <Text color={textColor} variant="h5">
        Quote Of The Day
      </Text>

      <Surface
        elevation={2}
        style={{
          marginTop: 16,
          alignItems: 'center',
          padding: 16,
          borderRadius: 8,
          backgroundColor: cardColor,
        }}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <Text
              color={textColor}
              variant="body1"
              style={{ fontStyle: 'italic' }}>
              "{quote}"
            </Text>
            <Text color={textColor} variant="body2" style={{ marginTop: 8 }}>
              -{author}
            </Text>
          </>
        )}
      </Surface>
    </View>
  );
}

export default QuoteScreen;
