import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { CurrentWeather } from '../types';
import { DataTableComponent } from './DataTableComponent';
import HeaderContainer from './HeaderContainer';

const CurrentDashboard: React.FC<{ data?: CurrentWeather }> = ({ data }) => {
    return (
        <>
            {data?.name ? (
                <>
                    <Text h3>{data?.name}</Text>
                    <Text>{moment.unix(data.dt).format('DD.MM.YYYY hh:mm a')}</Text>
                </>
            ) : null}
            <HeaderContainer>
                <Text style={styles.badge}>
                    {data?.main.temp}
                    <MaterialCommunityIcons name="temperature-celsius" size={60} color="black" />
                </Text>
                <Image
                    style={styles.image}
                    source={{ uri: `http://openweathermap.org/img/w/${data?.weather[0].icon}.png` }}
                />
            </HeaderContainer>
            <DataTableComponent mainData={data?.main} wind={data?.wind} />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
    },
    badge: {
        fontSize: 60,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    item: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    table: {
        fontSize: 40,
    },
});

export default CurrentDashboard;
