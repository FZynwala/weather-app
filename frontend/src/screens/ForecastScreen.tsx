import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';
import { ErrorNotification } from '../components/ErrorNotification';
import ForecastDashboard from '../components/ForecastDashboard';
import GooglePlacesInput from '../components/GooglePlacesInput';
import { RootState } from '../store';
import { useFetchForecastWeatherQuery } from '../store/apis/weatherApi';

const ForecastScreen: React.FC = () => {
    const { coord } = useSelector((state: RootState) => state.coord);

    const { data, isFetching, isError } = useFetchForecastWeatherQuery(coord);

    return (
        <View style={styles.cont}>
            <GooglePlacesInput />
            <View style={styles.container}>
                {isFetching ? (
                    <ActivityIndicator animating={true} color={'#1e90ff'} size={80} style={styles.spinner} />
                ) : isError ? (
                    <ErrorNotification title={'Error occured!'} content={'Please try again later.'} />
                ) : (
                    <ForecastDashboard data={data} />
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

export default withNavigationFocus(ForecastScreen);
