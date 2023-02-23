import React from 'react';
import { StyleSheet, View } from 'react-native';

const HeaderContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
});

export default HeaderContainer;
