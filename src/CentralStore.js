import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  Store  from './CombineReducer/Store';
import CakeComponent from './CombineReducer/Cake/CakeComponent';
import CakeHookComponent from './CombineReducer/Cake/CakeHookComponent';
import IceCreamComponent from './CombineReducer/IceCram/IceCreamComponent';
import IceCreamHookComponent from './CombineReducer/IceCram/IceCreamHookComoponent';
import PhoneComponent from './CombineReducer/Phone/PhoneComponent';
import PhoneHookComponent from './CombineReducer/Phone/PhoneHookComponent';
import CakeComponentUserDefine from './CombineReducer/Cake/CakeComponentUserDefine';
import CakeHookComponentUserDefine from './CombineReducer/Cake/CakeHookComponentUserDefine';
import CakeOwnProps from './CombineReducer/Cake/CakeOwnProps';

function CentralStore() {
    return (
            <div className="App">
            <h1>Combine Reducer Example</h1>
             <Provider store={Store}>
                <hr />
                <CakeOwnProps NumberOfCake="phone" />
            
                 <hr />
                Cake Component:<CakeComponent />
                <hr />
                IceCream Component:<IceCreamComponent />
                <hr />
                Phone Component<PhoneComponent />
                <hr />
                Cake Hook Component<CakeHookComponent />
                <hr/>
                IceCream Hook Component:<IceCreamHookComponent />
                <hr/>
                IceCream Hook Component:<PhoneHookComponent />
                <hr/>
                Cake Component UserDefine:<CakeComponentUserDefine />
                <hr/>
                Cake Component Hook UserDefine:<CakeHookComponentUserDefine />
            </Provider>
            </div>
        
    )
}

export default CentralStore
