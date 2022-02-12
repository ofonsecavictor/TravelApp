import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

export function Popular ({props, ...rest}) {
    const navigation = useNavigation();
    function GotToDetails() {
      navigation.navigate('Details');
    }
    
    return(
        <TouchableOpacity  onPress={GotToDetails} style={styles.container}>
            <View style={styles.content}>

            </View>
        </TouchableOpacity>
    )
}