
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';

const B2 = () => {
  return (
    <ImageBackground
      source={require('../assets/images/banner13.jpg')}
      style={styles.bgImage}
      resizeMode="cover"
    >
      {/* Đặt StatusBar trong suốt */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Nội dung chính, căn giữa theo chiều dọc và ngang */}
      <View style={styles.container}>
        <Text style={styles.text}>
          Đây là ví dụ Bài 2 - Nội dung được căn giữa với justifyContent
        </Text>
      </View>
    </ImageBackground>
  );
};

export default B2;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
