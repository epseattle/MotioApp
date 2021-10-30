import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import auth from '@react-native-firebase/auth';

import { View } from "react-native";

const Auth = (props) => {
    const dispatch = useDispatch();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        console.log(user);
        setUser(user);
        if (initializing) {
            setInitializing(false);
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