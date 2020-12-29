import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {myStore} from "./Redux/store";
const RootContainer =()=>(
        <Provider store={myStore}>
                <App/>
        </Provider>
)

AppRegistry.registerComponent(appName, () => RootContainer);
