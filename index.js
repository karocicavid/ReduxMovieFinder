import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {myStore,mypersistor} from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
const RootContainer =()=>(
        <Provider store={myStore}>
                <PersistGate loading={null} persistor = {mypersistor}>
                        <App/>
                </PersistGate>
        </Provider>
)

AppRegistry.registerComponent(appName, () => RootContainer);
