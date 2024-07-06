// src/molecules/Header_list_buttons.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonHeader } from '../../atomes/buttons';

interface InfoProps {
  items: string[];
}

export function HeaderListButtons({ items }: InfoProps) {
  return (
    <View style={styles.container}>
      {items.map((item, _) => (
        <ButtonHeader key={_} title={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
