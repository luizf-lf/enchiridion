import React from 'react';
import WebView from 'react-native-webview';

function WebViewScreen() {
  return (
    <WebView
      downloadingMessage="Loading"
      source={{
        uri: 'https://google.com',
      }}
    />
  );
}

export default WebViewScreen;
