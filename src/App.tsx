import React from "react";
import store from './components/Store';
import { Provider } from 'react-redux';
import Parent from "./components/ParentList";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Parent/>
      </Provider>
    </>
  );
}

export default App;
