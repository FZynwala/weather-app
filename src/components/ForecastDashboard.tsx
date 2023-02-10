import moment from 'moment';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { ForecastWeather, List } from '../types';
import { dateFormat } from '../utils';
import ForecastItem from './ForecastItem';
import Spacer from './Spacer';

const ForecastDashboard: React.FC<{ data?: ForecastWeather }> = ({ data }) => {
    const sortByDays = (list?: List[]) => {
        const today = moment().format(dateFormat);
        const day0: List[] = [];
        const day1: List[] = [];
        const day2: List[] = [];
        const day3: List[] = [];
        const day4: List[] = [];

        list?.forEach((item) => {
            if (moment.unix(item?.dt).format(dateFormat) === today) {
                day0.push(item);
            } else if (moment.unix(item?.dt).format(dateFormat) === moment().add(1, 'day').format(dateFormat)) {
                day1.push(item);
            } else if (moment.unix(item?.dt).format(dateFormat) === moment().add(2, 'day').format(dateFormat)) {
                day2.push(item);
            } else if (moment.unix(item?.dt).format(dateFormat) === moment().add(3, 'day').format(dateFormat)) {
                day3.push(item);
            } else if (moment.unix(item?.dt).format(dateFormat) === moment().add(4, 'day').format(dateFormat)) {
                day4.push(item);
            }
        });

        return [day0, day1, day2, day3, day4];
    };

    return (
        <>
            {data?.city.name ? (
                <>
                    <Text h3>{data?.city.name}</Text>
                </>
            ) : null}
            <Spacer />
            <FlatList
                data={sortByDays(data?.list)}
                showsVerticalScrollIndicator
                renderItem={({ item, index }) => {
                    return (
                        <>
                            <Text style={styles.dayHeader} h4>
                                {moment.unix(item[0].dt).format('dddd')}
                            </Text>
                            <FlatList
                                data={item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return <ForecastItem item={item} index={index} />;
                                }}
                            />
                        </>
                    );
                }}
                style={{ overflow: 'hidden' }}
            />
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
    list: {
        marginVertical: 10,
    },
    dayHeader: {
        marginBottom: 5,
        marginTop: 20,
    },
    subList: {
        backgroundColor: '#4b6584',
    },
});

export default ForecastDashboard;
