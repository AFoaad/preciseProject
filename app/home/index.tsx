import React, { memo } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import useGetHolidays from '../hooks/useGetHolidays';
import ListView from './partilas/listView';
import styles from './styles';

const Home: React.FC = (): JSX.Element => {
  const {
    countryCode,
    data,
    handleHolidays,
    loading,
    onChange,
  } = useGetHolidays();

  return (
    <>
      <View style={styles.inputHolder}>
        <TextInput
          placeholder="Enter top level domain : example (usa)"
          onChangeText={onChange}
          autoCapitalize="sentences"
          value={countryCode}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleHolidays} style={styles.btn}>
          <Text children="get holidays" />
        </TouchableOpacity>
      </View>
      <ListView items={data} loading={loading} />
    </>
  );
};

export default memo(Home);
