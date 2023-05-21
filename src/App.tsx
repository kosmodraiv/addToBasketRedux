import React, { useState } from "react";
import store from './components/store';
import { Provider } from 'react-redux';
import Parent from "./components/ParentList";

function App(): React.ReactElement {
  const [blur, setBlur] = useState<boolean>(false);

  const blurBg = () => {
    setBlur(true);
  };

  const unblurBg = () => {
    setBlur(false);
  };

  return (
    <>
      <Provider store={store}>
        <Parent></Parent>
      </Provider>
    </>
  );
}

export default App;