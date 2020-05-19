import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ProgressiveImage} from './component/ProgressiveImage';

export const App = () => {
  return (
    <View style={styles.container}>
      <ProgressiveImage
        thumbnailSource={require('./assets/image-cat-small.jpg')}
        source={require('./assets/image-cat-large.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};
