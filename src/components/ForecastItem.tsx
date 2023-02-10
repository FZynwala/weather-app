import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, ListItem, Text } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { List } from '../types';
import { listColor } from '../utils';

const ForecastItem: React.FC<{ item: List; index: number }> = ({ item, index }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.list}>
            <ListItem.Accordion
                theme={{ colors: { primary: listColor } }}
                content={
                    <View style={styles.item}>
                        <Text h3>{moment.unix(item.dt).format('HH:mm')}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }}
                        />
                        <Text style={styles.tempSize}>{item.main.temp}&#176;C</Text>
                    </View>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                <DataTable style={styles.table}>
                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Feels</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item.main.feels_like} &#176;C
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Temp max</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item?.main.temp_max} &#176;C
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Temp min</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item?.main.temp_min} &#176;C
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Humidity</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item?.main.humidity}%
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Pressure</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item?.main.pressure} hPa
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Wind speed</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item?.wind.speed} m/s
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell textStyle={{ fontSize: 20 }}>Wind deg</DataTable.Cell>
                        <DataTable.Cell textStyle={{ fontSize: 20 }} numeric>
                            {item?.wind.deg}
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </ListItem.Accordion>
        </View>
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
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: listColor,
        color: 'white',
        flex: 1,
    },
    tempSize: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    table: {
        backgroundColor: listColor,
        color: 'white',
    },
    list: {
        backgroundColor: listColor,
    },
});

export default ForecastItem;
