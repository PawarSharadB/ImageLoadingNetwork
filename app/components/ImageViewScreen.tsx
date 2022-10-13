import React from 'react';
import {Image, View} from 'react-native';

export type IImageViewScreenProps = {};

export const ImageViewScreen = (props: any) => {
  const {id} = props.route.params;

  return (
    <View>
      <Image
        style={{resizeMode: 'cover', width: '100%', height: '50%'}}
        source={{uri: `${id}`}}
      />
    </View>
  );
};
