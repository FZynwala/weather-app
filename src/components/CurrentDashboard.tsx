import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { CurrentWeather } from '../types';
import HeaderContainer from './HeaderContainer';

const CurrentDashboard: React.FC<{ data?: CurrentWeather }> = ({ data }) => {
    return (
        <>
            {data?.name ? (
                <>
                    <Text h3>{data?.name}</Text>
                    <Text>{moment.unix(data.dt).format('DD.MM.YYYY hh:mm')}</Text>
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
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Feels</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.main.feels_like} &#176;C
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Temp max</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.main.temp_max} &#176;C
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Temp min</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.main.temp_min} &#176;C
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Humidity</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.main.humidity}%
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Pressure</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.main.pressure} hPa
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Wind speed</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.wind.speed} m/s
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20 }}>Wind deg</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                        {data?.wind.deg}
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    );
};

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        width: 330,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#98c1c8',
    },
    surfaceItem: {
        padding: 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
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
