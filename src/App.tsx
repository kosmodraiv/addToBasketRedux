import React from "react";

import Main from "./components/Main";

import { store, persistedStore } from './components/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyles } from './components/Styles'

const App: React.FC = () => {
  return (

  <>
    <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Main />
        </PersistGate>
      </Provider>
  </>

  );
}

export default App;
