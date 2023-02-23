import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';
import CurrentDashboard from '../components/CurrentDashboard';
import { ErrorNotification } from '../components/ErrorNotification';
import GooglePlacesInput from '../components/GooglePlacesInput';
import { RootState, useFetchCurrentWeatherQuery } from '../store';

const CurrentScreen: React.FC = () => {
    const { coord } = useSelector((state: RootState) => state.coord);
    const { data, isFetching, isError } = useFetchCurrentWeatherQuery(coord);

    return (
        <View style={styles.cont}>
            <GooglePlacesInput />
            <View style={styles.container}>
                {isFetching ? (
                    <ActivityIndicator animating={true} color={'#1e90ff'} size={80} style={styles.spinner} />
                ) : isError ? (
                    <ErrorNotification title={'Error occured!'} content={'Please try again later.'} />
                ) : (
                    <CurrentDashboard data={data} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cont: {
        overflow: 'scroll',
    },
    spinner: {
        marginTop: 200,
    },
});

export default withNavigationFocus(CurrentScreen);
