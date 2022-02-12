import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles'

export function Category ({title, props, ...rest}) {
    return (

            <TouchableOpacity style={styles.content}>
                <Text>{title}</Text>
            </TouchableOpacity>

            

    )
}