import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const Details = ({navigation, route}: DetailsProps) => {
  const {productId} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen id:{productId}</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
