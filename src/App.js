import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import cakeStore from './Components/cakeStore'
import Store from './Components/cakeComponent'
import BuyIceCream from './Components/BuyIceCream';
import { IceCreamStore } from './Components/BuyIceCream'
import BuyPhone from './Components/BuyPhone';
import { PhoneStore } from './Components/BuyPhone';
import CakeHookComponent from './Components/CakeHookComponent';


function App() {
  return (
    <div className="App">
      <Provider store={cakeStore}>
        <Store />
        <CakeHookComponent />
      </Provider>

        {/* <Provider store={IceCreamStore}>
        <BuyIceCream />
      </Provider> */}

      <Provider store={PhoneStore}>
        <BuyPhone />
      </Provider>
    </div>
  );
}

export default App;
