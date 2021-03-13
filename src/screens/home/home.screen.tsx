import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Layout,
    TopNavigationAction,
    Button,
} from '@ui-kitten/components';
import { MainLayout } from '../../layout';
import { AppRoute } from '../../navigation/app-routes';
import { SettingsIcon, PersonIcon } from '../../assets/icons';
import { FlexBox, Spacer, Text } from '../../components';

export const Home = props => {
    const { eva } = props;
    const themedStyle = eva.style;



    const navigateToSettings = () => {
        props.navigation.navigate(AppRoute.SETTINGS);
    }


    return (
        <View style={themedStyle.container}>
            <MainLayout
                safeArea={true}
                tabPadding
                showTitle={true}
                {...props}
            >
                <Layout level="1" style={themedStyle.container}>
                    <FlexBox row aligncenter justifybetween>
                        <Text tx="homeScreen.main"></Text>
                        <Button onPress={navigateToSettings}>Navigate</Button>
                    </FlexBox>
                </Layout>
            </MainLayout>
        </View>
    );
};

