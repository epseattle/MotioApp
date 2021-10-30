/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import store from './redux/store';
import { Provider } from 'react-redux';

import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import Auth from './auth';

import RootNavigation from './navigation/rootNavigation';

const App = () => {

    return (
        <Provider store={store}>
            <Auth>
                <RootNavigation />
            </Auth>
        </Provider>
    );
};

const styles = StyleSheet.create({
});

export default App;
