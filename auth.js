import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import auth from '@react-native-firebase/auth';

import { View } from "react-native";

const Auth = (props) => {
    const [initializing, setInitializing] = useState(false);

    // Handle user state changes
    function onAuthStateChanged(user) {
        if (initializing) {
            setInitializing(true);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    );
}

export default Auth;