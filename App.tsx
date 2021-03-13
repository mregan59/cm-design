import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import customTheme from './src/theme/dark-theme.json'; // <-- Import app theme

import { Loading } from './src/loading';
import customMapping from './src/theme/custom-mapping.json';

//NAVIGATORS
import { AppNavigator } from './src/navigation/app.navigator';
import { MainBottomNavigator } from './src/navigation/main-bottom.navigator';
import { MainTopNavigator } from './src/navigation/main-top.navigator';
import { AppRoute } from './src/navigation/app-routes';

const theme = { ...eva.dark, ...customTheme };


export default function App(props) {
    const [initialRoute, setInitialRoute] = useState(AppRoute.HOME);

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={theme}
            >
                <SafeAreaProvider>
                    {initialRoute ? (
                        <NavigationContainer>
                            <AppNavigator />
                        </NavigationContainer>
                    ) : (
                        <Loading></Loading>
                    )}
                </SafeAreaProvider>
            </ApplicationProvider>
        </>
    );
}
