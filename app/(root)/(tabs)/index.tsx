import React from 'react';

import {Text, View} from 'react-native';
import {Link} from "expo-router";

const index = () => {
    // @ts-ignore
    return (
        <View className={'flex items-center justify-center'}>
            <Text className='font-extrabold'>Welcome to real estate</Text>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/properties/2">Propertiesr</Link>

        </View>
    );
};

export default index;
