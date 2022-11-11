import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider,extendTheme, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "gray.600",
        _dark: "gray.100",
      },
      secondary: {
        default: "gray.900",
        _dark: "gray.50",
      },
      colr2: {
        default: "gray.600",
        _dark: "gray.50",
      },
      colr3: {
        default: "blue.600",
        _dark: "gray.50",
      },

      footer: {
        default: "white",
        _dark: "gray.900",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);


