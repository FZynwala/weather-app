import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { apiKey } from '../config';
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
                isRowScrollable={true}
                enablePoweredByContainer={false}
                keepResultsAfterBlur={false}
                listEmptyComponent={() => (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                padding: 10,
                            }}
                        >
                            {'No results'}
                        </Text>
                        <Entypo name="emoji-sad" size={24} color="black" />
                    </View>
                )}
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
                        backgroundColor: '#f1f2f6',
                        width: '90%',
                        alignSelf: 'center',
                    },
                    container: {
                        marginHorizontal: 15,
                        marginTop: 45,
                        zIndex: 1110,
                        backgroundColor: '#f1f2f6',
                    },
                    separator: {
                        flex: 1,
                        height: 1,
                        backgroundColor: '#c0c6d2',
                    },
                    row: {
                        backgroundColor: '#f1f2f6',
                    },
                }}
            />
        </View>
    );
};

export default GooglePlacesInput;
