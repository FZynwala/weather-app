import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { apiKey } from '../config/config';
import { changeCoord } from '../store';

const GooglePlacesInput: React.FC = () => {
    const dispatch = useDispatch();

    const handlePress = (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
        dispatch(changeCoord({ lat: details?.geometry.location.lat, lon: details?.geometry.location.lng }));
    };
    return (
        <View>
            <GooglePlacesAutocomplete
                placeholder="Type a place"
                query={{ key: apiKey }}
                fetchDetails={true}
                onPress={handlePress}
                onFail={(error) => console.log(error)}
                onNotFound={() => console.log('no results')}
                isRowScrollable={true}
                enablePoweredByContainer={false}
                keepResultsAfterBlur={false}
                textInputProps={{
                    InputComp: Input,
                    leftIcon: { type: 'feather', name: 'search', size: 30 },
                    style: {
                        backgroundColor: '#f1f2f6',
                    },
                }}
                styles={{
                    listView: {
                        position: 'absolute',
                        zIndex: 100,
                        elevation: 3,
                        top: 50,
                        paddingHorizontal: 15,
                    },
                    container: {
                        marginHorizontal: 15,
                        marginTop: 35,
                        zIndex: 1110,
                    },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        width: 200,
    },
    cont: {
        height: '100%',
    },
    // view: {
    //     marginVertical: 30,
    // },
});

export default GooglePlacesInput;
