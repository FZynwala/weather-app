import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from 'react-native-paper';
import Spacer from './Spacer';

type ErrorNotificationProps = {
    title: string;
    content: string;
};

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({ title, content }) => {
    return (
        <Spacer>
            <Card style={styles.card}>
                <Card.Content>
                    <Text h4>{title}</Text>
                    <Text>{content}</Text>
                </Card.Content>
            </Card>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f4b9a9',
    },
});
