import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';

export function Header ({title,description, props, ...rest}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )


}