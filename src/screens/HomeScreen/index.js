import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {Header} from '../../components/Header';
import {Category} from '../../components/Category';
import {Popular} from '../../components/Popular';
import {SearchBar} from '../../components/SearchBar';
import {styles} from './styles';

export function Home() {

  
  return (
    <ScrollView style={styles.container}>
      <Header title="TRAVELAPP" description="Choose another" />
      <SearchBar/>
      <Text
        style={{
          marginTop: 104,
          marginLeft: 30,
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 28,
        }}>
        Category
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{marginTop: 15}}>
        <Category title="Praias" />
        <Category title="Quiosques" />
        <Category title="Restaurantes" />
        <Category title="Praias Secretas" />
      </ScrollView>
        <Text style={styles.title}>Popular</Text>
        <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{marginTop: 15}}>
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </ScrollView>
    </ScrollView>
  );
}
