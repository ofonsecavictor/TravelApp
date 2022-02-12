import * as React from 'react';
import {View, Text} from 'react-native';
import { Searchbar } from 'react-native-paper';

import {styles} from './styles'

export function SearchBar () {

    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


    return (
        <View style={styles.container}>
        <Searchbar style={styles.search}
      placeholder="Pesquisar"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

        </View>
    )
}